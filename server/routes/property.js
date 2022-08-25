const express = require("express");
const aws = require('aws-sdk');
const { ObjectId } = require("mongodb");
const formidable = require('formidable');
const fs = require('fs');   

const propertyRoutes = express.Router();
const db = require("../db/conn");

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET
})

// create a new listing
propertyRoutes.route("/property/listProperty").post((req, response) => {
    var form = new formidable.IncomingForm();
    form.parse(req, async function(err, fields, files) {
        let db_connect = db.getDb();
        if (err) {
            return console.error(err.message);
        }

        const image = {
            Bucket: process.env.AWS_IMAGES_BUCKET,
            Key: files.propertyImage.originalFilename,
            Body: fs.readFileSync(files.propertyImage.filepath),
            ACL:"public-read-write",
            ContentType:"image/jpeg"
        }
    
        const uploadedImage = await s3.upload(image, (error, data) => {
            if (error) {
                response.status(500).send({ "err":error })
            }
        }).promise()
        
        const {
            address1,
            address2,
            city,
            state,
            zip,
            price,
            description
        } = fields

        const newProperty = {
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zip: zip,
            image: uploadedImage.Location,
            price: price,
            description: description,
            available: true
        }

        db_connect.collection("properties").insertOne(newProperty, (err, res) => {
            if (err) throw err;
            console.log(res)
            response.json(res)
        })
    });
})

// get all listings
propertyRoutes.route("/property/getProperties").get((req, response) => {
    let db_connect = db.getDb();

    db_connect.collection("properties").find({}).toArray((err, res) => {
        if (err) throw err;
        response.json(res)
    })
})

module.exports = propertyRoutes;

// save property
// update property
// delete property
// find all properties
// find property