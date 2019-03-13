CREATE DATABASE burgers_db;
DROP DATABASE IF EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id INT NOT NULL auto_increment
, burger_name VARCHAR(200) NOT NULL
, devoured BOOLEAN
, PRIMARY KEY(id)
);