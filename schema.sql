DROP DATABASE IF EXISTS nike;

CREATE DATABASE nike;

USE nike;

CREATE TABLE suggestions (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  url varchar(10000) NOT NULL,
  price int(5) NOT NULL,
  category varchar(50) NOT NULL,
  colors int(2) NOT NULL,
  style varchar(50) NOT NULL,
  shoe_kind varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);