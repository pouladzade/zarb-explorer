import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import MUIDataTable from "mui-datatables";
import { GrpcWebClientBase } from "grpc-web";
import { ZarbClient } from "../../proto/zarb_grpc_web_pb";
import {
  BlockchainInfoRequest,
  BlockchainInfoResponse,
} from "../../proto/zarb_pb.js";

const client = new ZarbClient("http://localhost:8090", null, null);

function BlockchainInfo() {
  const [post, setPost] = useState([]);
  const getBlockchaininfo = () => {
    var blockRequest = new BlockchainInfoRequest();
    client.getBlockchainInfo(
      BlockchainInfoRequest,
      null,
      function (err, response) {
        if (err) {
          console.log("the value in pong", err);
        } else {
          let result = response.toObject();
          setPost(result.blockRequest);
        }
      }
    );
  };
  useEffect(() => {
    const interval = setInterval(() => getBlockchaininfo(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return Block_infotable(post);
}

//DataTable
function Block_infotable(value) {
  let vr = new ValidatorResponse();
  value.map((value) => {
    return (vr = value);
  });

  const columns = [
    { label: "Public Key", name: "publickey" },
    { label: "Number", name: "number" },
    { label: "Sequence", name: "sequence" },
    { label: "Stake", name: "stake" },
    { label: "Height", name: "bondingHeight" },
  ];

  const data = [
    {
      publickey: vr.publicKey,
      number: vr.number,
      sequence: vr.sequence,
      stake: vr.stake,
      bondingHeight: vr.bondingHeight,
    },
  ];

  const options = {
    filterType: "checkbox",
    responsive: "",
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
