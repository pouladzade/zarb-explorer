import React, { useState,useEffect} from 'react';
import ReactDom from 'react-dom';



import { ZarbClient } from '../proto/zarb_grpc_web_pb';
import { ValidatorsRequest, ValidatorsResponse } from '../proto/zarb_pb.js';

var client = new ZarbClient("http://127.0.0.1:9090");
export default function App() {

    const [Val, setVal] = useState(0);
    const sendPing = () => {
        alert("hi");
        var validatorRequest = new ValidatorsRequest();
        client.getValidators(validatorRequest, null, function (err, response) {
            if (err) {
                console.log("the value in pong", err);
            } else {
                // serialize the response to an object
                var validatorList = response.toObject();
                // call setStatus to change the value of status
                console.log("the value in pong", validatorList)
                
            }

        });
    }
  // useEffect will make this trigger on component start
  useEffect(() => {
    sendPing();
  });
    return (
        <div className="App">
            <p>Status: {status + ''}</p>
        </div>
    )
}

