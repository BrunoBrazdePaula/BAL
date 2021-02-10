const express = require("express");
const { userInfo } = require("os");
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get("/usuarios",  UserController.index);
routes.post("/usuarios", UserController.store);
routes.get("/usuarios/:id",  UserController.detail);
routes.put("/usuarios/:id", UserController.update);
routes.put("/usuarios/:id", UserController.destroy);


module.exports = routes;
