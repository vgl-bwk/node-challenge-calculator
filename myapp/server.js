const express = require("express");
const app = express();

/*Parametros adicionales que hagan falta*/
app.get("/add", (req, res) => {
  const sum = Number(req.query.value1) + Number(req.query.value2);
  res.send(`${sum}`);
});

/*identificadores*/
app.get("/add/:value1/:value2", (req, res) => {
  const sum = Number(req.params.value1) + Number(req.params.value2);
  res.send(`${sum}`);
});

app.listen(4000, () => console.log("Server is up and running"));
