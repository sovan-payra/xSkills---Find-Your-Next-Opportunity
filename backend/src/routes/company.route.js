const express = require("express");

const isAuthenticated = require("../middlewares/isAuthenticated");

const {
    getCompany,
    getCompanyById,
    registerCompany,
    updateCompany,
} = require("../controllers/company.controller");

const singleUpload = require("../middlewares/mutler");

const router = express.Router();

router.route("/register").post(
    isAuthenticated,
    registerCompany
);

router.route("/get").get(
    isAuthenticated,
    getCompany
);

router.route("/get/:id").get(
    isAuthenticated,
    getCompanyById
);

router.route("/update/:id").put(
    isAuthenticated,
    singleUpload,
    updateCompany
);

module.exports = router;