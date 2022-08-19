const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/ip", function (req, res) {
  axios.get("https://api.ipify.org/?format=json").then(function (response) {
    console.log("ip server", response.data);
    res.json(response.data);
  });
});

router.route("/user")
  .get(userController.index)
  .post(userController.store)
  .put(function (req, res) {
    console.log('put user ', req.params);
    res.json(req.params);
  });
