DROP DATABASE IF EXISTS nike;

CREATE DATABASE nike;

USE nike;

CREATE TABLE suggestions (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  price int(5) NOT NULL,
  category varchar(50) NOT NULL,
  colors int(2) NOT NULL,
  style varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE description (
  id int NOT NULL AUTO_INCREMENT,
  description varchar(500) NOT NULL,
  benefits varchar(500) NOT NULL,
  item_headline varchar(500) NOT NULL,
  PRIMARY KEY (ID)
);