//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = (req , res) =>{
    res.json({ message: "The server is perfectly working.. " });
}

const createContact = (req , res) =>{
    res.json({ message: "The server is perfectly working.. " });
}

const getContact = (req, res) => {
  res.json({ message: "The server is perfectly working.. " });
};

const updateContact = (req , res) =>{
    res.json({ message: "The server is perfectly working.. " });
}

const deleteContact = (req , res) =>{
    res.json({ message: "The server is perfectly working.. " });
}

module.exports = {
    getContacts , 
    createContact ,
    getContact,
    updateContact,
    deleteContact
};