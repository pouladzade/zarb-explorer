--
--    SPDX-License-Identifier: Apache-2.0
--

CREATE USER :user
WITH PASSWORD :passwd;
DROP DATABASE IF EXISTS :dbname;
CREATE DATABASE :dbname owner :user;
\c :dbname;
--

-- ----------------------------
--  Table structure for `validator`
-- ----------------------------
DROP TABLE IF EXISTS validators;

CREATE TABLE validators
(
  id SERIAL PRIMARY KEY,
  blocknumber integer DEFAULT NULL,
  blocksequence integer DEFAULT NULL,
  stake integer DEFAULT NULL,
  bonding_height integer DEFAULT NULL,
  last_joined_height integer DEFAULT NULL,
  public_key character varying(256) DEFAULT NULL
);

ALTER table validators owner to :user;


DROP INDEX IF EXISTS valiators_idx;
CREATE INDEX ON Validators
(blocknumber);


  bool initial_block_download = 5;
  int32 height = 6;
  int32 received_messages = 7;
  int32 invalid_messages = 8;
  int32 received_bytes = 9;
-- ----------------------------
--  Table structure for `network`
-- ----------------------------
DROP TABLE IF EXISTS network;

CREATE TABLE network
(
  id SERIAL PRIMARY KEY,
  peer_id character varying(256) DEFAULT NULL
  moniker varchar(255),
  node_version bytea DEFAULT NULL,
  initial_block_download boolean,
  height integer DEFAULT NULL,
  received_messages integer DEFAULT NULL,
  invalid_messages  integer DEFAULT NULL,
  received_bytes integer DEFAULT NULL,
  public_key character varying(256) DEFAULT NULL
);

ALTER table network owner to :user;


DROP INDEX IF EXISTS network_idx;
CREATE INDEX ON Network
(height);