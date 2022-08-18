const express = require("express");

const Controller = require("../Controllers/UserController");

const router = express.Router();

router.post("/register", Controller.Register);
router.get("/", Controller.GetAllUsers);

module.exports = router;
