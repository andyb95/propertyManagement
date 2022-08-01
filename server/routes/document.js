const express = require("express");
const { ObjectId } = require("mongodb");

const documentRoutes = express.Router();
const db = require("../db/conn");

module.exports = documentRoutes;

// save doc
// retrieve docs by user Id
// retrieve one doc
// delete doc
