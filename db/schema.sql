-- DROP DATABASE IF EXISTS murderparty_db;
CREATE DATABASE IF NOT EXISTS murderParty_db;
USE murderParty_db;

CREATE TABLE guests(
id int auto_increment,
role varchar(20),
name varchar(40),
murderer varchar(40),
primary key (id)
);

CREATE TABLE suspects(
id int auto_increment,
name varchar(40),
primary key(id)
);

CREATE TABLE story(
id int auto_increment,
Character1Clues varchar(255),
Character2Clues varchar(255),
Character3Clues varchar(255),
primary key(id)
);





