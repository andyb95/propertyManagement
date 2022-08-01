const express = require("express");
const { ObjectId } = require("mongodb");
const bcrypt = require('bcrypt');

const userRoutes = express.Router();
const db = require("../db/conn");

// create a new user
userRoutes.route("/user/register").post((req, response) => {
    let db_connect = db.getDb();
    const {
        firstName,
        lastName,
        email,
        password,
        tenant,
        landlord,
        properties
    } = req.body.registerFormData

    const registerUser = () => {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
    
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hash,
            tenant: tenant,
            landlord: landlord,
            properties: properties
        }
    
        db_connect.collection("users").insertOne(newUser, (err, res) => {
            if (err) throw err;
            req.session.user = {
                userId: res.insertedId.toString(),
                email: newUser.email
            }
            response.json(res);
        })
    }

    // check if email already exists
    db_connect
        .collection("users")
        .findOne({ email: email }, (err, result) => {
            if (err) throw err;
            if (result) response.status(210).send('There is already an account associated with this email');
            else registerUser();
        })
})

// login
userRoutes.route("/user/login").get((req, response) => {
    let db_connect = db.getDb();

    db_connect
        .collection("users")
        .findOne({ email: req.body.email }, (err, result) => {
            if (err) throw err;
            if (!result) return res.status(404).send('There is no account associated with this email')
            const user = result
            const authenticated = bcrypt.compareSync(password, user.password)
            if (authenticated) {
                req.session.user = {
                    firstName: user.first,
                    lastName: user.last,
                    email: user.email,
                    password: hash,
                    tenant: user.tenant,
                    landlord: user.landlord,
                    properties: user.properties
                }
            }
        })
    response.json(res);
})

// update user by id
userRoutes.route("/user/update/:id").post((req, res) => {
    let db_connect = db.getDb();
    let query = { _id: ObjectId(req.params.id) };
    let newValues = {
        $set: {
            firstName: req.body.first,
            lastName: req.body.last,
            email: req.body.email,
            tenant: req.body.tenant,
            landlord: req.body.landlord,
            properties: req.body.properties
        }
    };
    db_connect
        .collection("users")
        .updateOne(query, newValues, (err, res) => {
            if (err) throw err;
            response.json(res);
        })
})

// logout
// userRoutes.route("/logout")
// logout: async(req, res) => {
//     req.session.destroy()
//     res.sendStatus(200)
// }

// delete user by id
userRoutes.route("/user/delete/:id").delete((req, response) => {
    let db_connect = db.getDb();
    let query = { _id: ObjectId(req.params.id) };
    db_connect.colletion("users").deleteOne(query, (err, obj) => {
        if (err) throw err;
        response.json(obj);
    })
});

module.exports = userRoutes;
