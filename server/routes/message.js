const express = require("express");
const { ObjectId } = require("mongodb");

const messageRoutes = express.Router();
const db = require("../db/conn");

// submit request
messageRoutes.route("/message/submitRequest").post((req, response) => {
    let db_connect = db.getDb();
    const {
        property,
        requestType,
        subject,
        description,
        from
    } = req.body

    const newMessage = {
        property: property,
        requestType: requestType,
        subject: subject,
        description: description,
        from: from
    }

    db_connect.collection("messages").insertOne(newMessage, (err, res) => {
        if (err) throw err;
        response.json(res);
    })
})

// retrieve all messages by user
messageRoutes.route("/message/retrieveInbox").get((req, response) => {
    let db_connect = db.getDb();

    db_connect
        .collection("messages")
        .find({ userId: req.session.user.userId })
        .toArray((err, result) => {
            if (err) throw err;
            response.json(result);
        })
})


// delete message
messageRoutes.route("/message/delete/:messageId").delete((req, response) => {
    let db_connect = db.getDb();
    let query = { _id: ObjectId(req.params.id) };
    db_connect.collection("messages").deleteOne(query, (err, obj) => {
        if (err) throw err;
        response.json(obj);
    })
})

module.exports = messageRoutes;
