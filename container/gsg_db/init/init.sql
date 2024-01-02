DROP DATABASE IF EXISTS gsg;
CREATE DATABASE gsg;
\c gsg;

DROP TABLE IF EXISTS m_store;
CREATE TABLE m_store (
    id integer NOT NULL PRIMARY KEY,
    name char(65535) NOT NULL,
    address char(65535) NOT NULL,
    lat REAL NOT NULL,
    lng REAL NOT NULL
);