const express = require("express");
const router = express.Router(); // create a router object that can be used to group related routes

const controller = require("../controllers/contactController");

//========================= Show ALL Users ===================//
router.get('/', controller.get);


//========================= Create New Users ===================//
router.post("/", controller.post);


//========================= Show user by ID (GET Individual) ===================//
router.get("/:id", controller.getSpecifiedUser);


//========================= PUT METHOD ===================//
router.put("/:id", controller.put);


//========================= PATCH METHOD ===================//
router.patch("/:id", controller.patch);


//========================= DELETE METHOD ===================//
router.delete("/:id", controller.del);


module.exports = router;