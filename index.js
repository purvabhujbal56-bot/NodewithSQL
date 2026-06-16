const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password: 'root123',
  database : 'delta_app'
});

let getRandomUser = () =>  {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}


try{
    connection.query("show tables",(err,result) => {
            if(err) throw err;
            console.log(result);
    });
} catch(err) {
    console.log(err);
}

connection.end();

app.get("/",(req,res) => {
  let q = `select count(*) fro users`;
  try{
    connection.query("show tables",(err,result) => {
            if(err) throw err;
            console.log(result);
     });
} catch(err) {
    console.log(err);
}
  res.send("Welcomme to home page");
});

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});

/*
try{
    connection.query("show tables",(err,result) => {
            if(err) throw err;
            console.log(result);
    });
} catch(err) {
    console.log(err);
}

connection.end();
*/