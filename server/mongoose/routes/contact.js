const express = require("express");
const router = express.Router();
const contact = require("../models/contactModel");

router.post("/addContact", async (req, res) => {
    try {
        const newContact = {
            fullName: req.body.fullName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            birthdate: req.body.birthdate
        };

        const result = await contact.create(newContact);
        res.status(201).json({ msg: "Contact added", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", error });
    }
});

router.get("/getContacts", async (req, res) => {
    try {
        const result = await contact.find();
        res.status(200).json(result );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", error });
    }
});
router.get("/getContact/:id", async (req, res) => {
    
    try {
        const id = req.params.id;
        const result = await contact.findOne({_id: id} );
        res.status(200).json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", error });
    }
});
router.delete("/deleteContact/:id",async (req,res) =>{
    try{
        const id = req.params.id;
        const result = await contact.findByIdAndDelete({_id : id})
        res.send({msg :"contact deleted ",result})

    }
    catch (error){
        console.error(error);
        res.status(500).json("internal server error", error)
    }
});
router.put("/updateContact/:id",async (req,res) =>{
    try{
        const id = req.params.id;
        const result = await contact.findByIdAndUpdate({_id : id} , {$set: req.body})
        res.send({msg :"contact updated ",result})

    }
    catch (error){
        console.error(error);
        res.status(500).json("internal server error", error)
    }
})


module.exports = router;
