import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import MUIDataTable from "mui-datatables";
import { GrpcWebClientBase } from "grpc-web";
import moment from "moment";
import { ZarbClient } from "../proto/zarb_grpc_web_pb";
import configData from "../config.json";
import {
  BlockchainInfoRequest,
  BlockRequest,
  BlockResponse,
} from "../proto/zarb_pb.js";

const client = new ZarbClient(configData.SERVER_URL, null, null);

function BlockchainInfo() {
  const [blockResponse, setBlock] = useState([]);
  var bh = new Array();
  //get the height of blockchain
  let height = getBlockHeight();
  const getblock = (value) => {
    var block_Req = new BlockRequest();
    block_Req.setHeight(value);
    block_Req.setVerbosity(1);
    client.getBlock(block_Req, null, function (err, response) {
      if (err) {
        console.log("the block details", err);
      } else {
        let result = response.toObject();
        bh.push(result);
      }
    });
    setBlock(bh);
  };
  useEffect(() => {
    let storagelength = SetHeight(height);
    if (storagelength == 5) {
      var bh = GetHeight();
      for (const [key, value] of Object.entries(bh)) {
        if (key.length == 0) {
          console.log("empty");
        } else {
          getblock(value);
        }
      }
      clearStorage();
    }
  }, [blockResponse, height]);

  // return Blockinfo(blockResponse);
  return Blockinfo(blockResponse);
}

//Get block details
function getBlockHeight() {
  const [blockheight, setheight] = useState([]);
  const getlatestblockheight = () => {
    var block_req = new BlockchainInfoRequest();
    client.getBlockchainInfo(block_req, null, function (err, response) {
      if (err) {
        console.log("the value in pong", err);
      } else {
        let result = response.toObject();
        setheight(result.height);
      }
    });
  };
  useEffect(() => {
    const interval = setInterval(() => getlatestblockheight(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return blockheight;
}

//DataTable
function Blockinfo(value) {
  console.log("the value", value);
  const columns = [
    { label: "Hash", name: "hash" },
    { label: "LastBlockHash", name: "LastBlockHash" },
    { label: "StateHash", name: "StateHash" },
    { label: "TxIDsHash", name: "TxIDsHash" },
    { label: "LastCertificateHash", name: "LastCertificateHash" },
    { label: "SortitionSeed", name: "SortitionSeed" },
    { label: "TxID", name: "txID" },
    { label: "BlockHash", name: "blockhash" },
    { label: "Signature", name: "Signature" },
    { label: "UnixTime", name: "blocktime" },
  ];

  const data = value.map((item) => {
    let j = JSON.parse(item.json);
    var txID = j.TxIDs.IDs;
    var blockhash = j.LastCertificate.BlockHash;
    var Signature = j.LastCertificate.Signature;
    var blocktime = j.UnixTime;
    let time = moment(item.blockTime).format("LTS");
    return [
      item.hash,
      j.Header.LastBlockHash,
      j.Header.StateHash,
      j.Header.TxIDsHash,
      j.Header.LastCertificateHash,
      j.Header.SortitionSeed,
      txID,
      blockhash.Signature,
      blocktime,
    ];
  });

  const options = {
    caseSensitive: true,
    responsive: "standard",
    selectableRows: "none",
  };
  return (
    <MUIDataTable
      title={"Block Info"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

//local storage Item
function SetHeight(height) {
  if (height != 0) {
    localStorage.setItem(height, JSON.stringify(height));
    return localStorage.length;
  }
}

function GetHeight() {
  return JSON.parse(JSON.stringify(localStorage));
}

function clearStorage() {
  localStorage.clear();
}

export { BlockchainInfo };
