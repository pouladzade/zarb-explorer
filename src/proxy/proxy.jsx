import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { Validators } from "../components/validator_component";
import { NetworkInfo } from "../components/network_component";
import { BlockchainInfo} from "../components/block_component"

function GetValidators() {
  return Validators();
}

function GetNetworkInfo() {
  return NetworkInfo();
}

function GetBlockInfo() {
  return BlockchainInfo();
}
export { GetValidators, GetNetworkInfo, GetBlockInfo };
