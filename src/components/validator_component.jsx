import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import MUIDataTable from "mui-datatables";
import { ZarbClient } from "../proto/zarb_grpc_web_pb";
import { ValidatorsRequest } from "../proto/zarb_pb.js";
const client = new ZarbClient("http://localhost:8090", null, null);

function Validators() {
  const [post, setPost] = useState([]);
  const getValidators = () => {
    var validatorRequest = new ValidatorsRequest();
    client.getValidators(validatorRequest, null, function (err, response) {
      if (err) {
        console.log("the value in pong", err);
      } else {
        let result = response.toObject();
        setPost(result.validatorsList);
      }
    });
  };
  useEffect(() => {
    const interval = setInterval(() => getValidators(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return Validatortable(post);
}

//DataTable
function Validatortable(value) {
  console.log(value);
  const columns = [
    { label: "Address", name: "address" },
    { label: "Number", name: "number" },
    { label: "Sequence", name: "sequence" },
    { label: "Stake", name: "stake" },
    { label: "Height", name: "bondingHeight" },
    { label: "LastJoinedHeight", name: "lastJoinedHeight" },
    { label: "Public Key", name: "publickey" },
  ];

  const data = value.map((item) => {
    return [
      item.address,
      item.number,
      item.sequence,
      item.stake,
      item.bondingHeight,
      item.lastJoinedHeight,
      item.publicKey,
    ];
  });

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

export { Validators };
