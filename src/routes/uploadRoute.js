const express = require("express");
const router = require("router");
const uploadPicture = require("../controllers/uploadController");

router.post("/", uploadPicture);

module.exports = router;
