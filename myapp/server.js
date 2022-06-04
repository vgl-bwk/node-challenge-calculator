const express = require("express");
const app = express();

const myLogger = (req, res, next) => {
  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};
app.use(myLogger);

/*Parametros adicionales que hagan falta*/
app.get("/add", (req, res) => {
  const sum = Number(req.query.value1) + Number(req.query.value2);
  res.send(`${sum}`);
});

app.get("/substract", (req, res) => {
  const sub = Number(req.query.value1) - Number(req.query.value2);
  res.send(`${sub}`);
});

app.get("/multiply", (req, res) => {
  const mult = Number(req.query.value1) * Number(req.query.value2);
  res.send(`${mult}`);
});

app.get("/divide", (req, res) => {
  const div = Number(req.query.value1) / Number(req.query.value2);
  res.send(`${div}`);
});

/*identificadores*/
app.get("/add/:value1/:value2", (req, res) => {
  const sum = Number(req.params.value1) + Number(req.params.value2);
  res.send(`${sum}`);
});

app.get("/substract/:value1/:value2", (req, res) => {
  const sum = Number(req.params.value1) - Number(req.params.value2);
  res.send(`${sum}`);
});

app.get("/multiply/:value1/:value2", (req, res) => {
  const sum = Number(req.params.value1) * Number(req.params.value2);
  res.send(`${sum}`);
});

app.get("/divide/:value1/:value2", (req, res) => {
  const sum = Number(req.params.value1) / Number(req.params.value2);
  res.send(`${sum}`);
});

app.listen(4000, () => console.log("Server is up and running"));
