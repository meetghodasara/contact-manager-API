const Contact = require("../models/contactModel");

const getContacts = async (req , res) =>{

    const contacts = await Contact.find({user_id : req.user_id});
    res.status(200).send(contacts);
}

const createContact = async (req , res) =>{
    const {name , email , phone } = req.body;
    if(!name || !email  || !phone){
        res.status(400);
        throw new Error("All fields are mandatory !");
    }

    const contact = await Contact.create(
        {
            name ,
            email , 
            phone,
            user_id :req.user.id
        }
    )
    res.status(201).json(contact);
}

const getContact = async (req, res) => {
    const contact = await Contact.findById(req.param.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
};

const updateContact = async (req , res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found!");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,    
        {new : true}
    )
    res.status(200).json(updatedContact);
}

const deleteContact = async (req , res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }
    await Contact.deleteOne({_id : req.params.id});
    res.status(200).json(contact);
}

module.exports = {
    getContacts , 
    createContact ,
    getContact,
    updateContact,
    deleteContact
};