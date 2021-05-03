import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import MUIDataTable from "mui-datatables";
import { ZarbClient } from "../proto/zarb_grpc_web_pb";
import { NetworkInfoRequest } from "../proto/zarb_pb.js";
import configData from "../config.json";

const client = new ZarbClient(configData.SERVER_URL, null, null);

function NetworkInfo() {
  const [post, setPost] = useState([]);
  const getNetworkInfo = () => {
    var networkrequest = new NetworkInfoRequest();
    client.getNetworkInfo(networkrequest, null, function (err, response) {
      if (err) {
        console.log("the value in pong", err);
      } else {
        let result = response.toObject();
        setPost(result.peersList);
      }
    });
  };
  useEffect(() => {
    const interval = setInterval(() => getNetworkInfo(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return NetworkInfotable(post);
}

//DataTable
function NetworkInfotable(value) {
  console.log(value);
  const columns = [
    { label: "Peer Id", name: "peer id" },
    { label: "Moniker", name: "moniker" },
    { label: "Node Version", name: "node version" },
    { label: "Height", name: "height" },
    { label: "Received Messages", name: "received messages" },
    { label: "Invalid Messages", name: "invalid messages" },
    { label: "Block download", name: "block download" },
  ];

  const data = value.map((item) => {
    return [
      item.peerId,
      item.moniker,
      item.nodeVersion,
      item.height,
      item.receivedMessages,
      item.receivedBytes,
      item.invalidMessages,
      item.initialBlockDownload,
    ];
  });

  const options = {
    caseSensitive: true,
    responsive: "standard",
    selectableRows: "none",
  };

  return (
    <MUIDataTable
      title={"Network Details"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export { NetworkInfo };
