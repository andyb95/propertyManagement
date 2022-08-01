const express = require("express");
const { ObjectId } = require("mongodb");

const propertyRoutes = express.Router();
const db = require("../db/conn");

module.exports = propertyRoutes;

// save property
// update property
// delete property
// find all properties
// find property