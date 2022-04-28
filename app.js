const { response } = require("express");
const express = require("express");
const chalk = require('chalk')
const morgan = require('morgan')
const debug = require('debug')('app')
const app = express();
const port = 3000

app.use(morgan('combined'))

app.get("/" , (req,res) => {

    res.send("I want to eat a lunch");

})

app.listen(port, () => {

    debug("listening on port "+ chalk.green(port))
 })
