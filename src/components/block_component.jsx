import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import MUIDataTable from "mui-datatables";
import { GrpcWebClientBase } from "grpc-web";
import moment from "moment";
import { ZarbClient } from "../proto/zarb_grpc_web_pb";
import {
  BlockchainInfoRequest,
  BlockRequest,
  BlockResponse,
} from "../proto/zarb_pb.js";

const client = new ZarbClient("http://localhost:8090", null, null);

function BlockchainInfo() {
  const [lastblockheight, setPost] = useState([]);
  const getlatestblockheight = () => {
    var block_req = new BlockchainInfoRequest();
    client.getBlockchainInfo(block_req, null, function (err, response) {
      if (err) {
        console.log("the value in pong", err);
      } else {
        let result = response.toObject();
        setPost([...lastblockheight, result.height]);
      }
    });
  };
  useEffect(() => {
    const interval = setInterval(() => getlatestblockheight(), 4000);
    return () => {
      clearInterval(interval);
    };
  }, [setPost]);
  console.log(lastblockheight);
  return GetBlockInfo(lastblockheight);
}

//Get block details
function GetBlockInfo(block_height) {
  const [blockresponse, setPost] = useState([]);
  const getblock = (height) => {
    var block_Req = new BlockRequest();
    block_Req.setHeight(height);
    block_Req.setVerbosity(1);
    client.getBlock(block_Req, null, function (err, response) {
      if (err) {
        console.log("the block details", err);
      } else {
        let result = response.toObject();
        setPost(result.height);
      }
    });
  };
  useEffect(() => {
    const interval = setInterval(() => getblock(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return Blockinfo(blockresponse);
}

//DataTable
function Blockinfo(value) {
  const columns = [
    { label: "Hash", name: "hash" },
    { label: "BlockTime", name: "blockTime" },
    { label: "Data", name: "data" },
  ];

  let time = moment(value.blockTime).format("LTS");
  const data = [
    {
      hash: value.hash,
      blockTime: time,
      data: value.data,
    },
  ];

  const options = {
    caseSensitive: true,
    responsive: "standard",
    selectableRows: "none",
  };
  return (
    <MUIDataTable
      title={"Validators"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export { BlockchainInfo };
