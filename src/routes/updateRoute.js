const express = require("express");
const router = express.Router();
const updatePicture = require("../controllers/updateController").default;

router.put("/", updatePicture);

module.exports = router;
