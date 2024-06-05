import asyncHandler from "express-async-handler";

/**
 * @desc Get all contacts
 * @route GET /api/contacts
 * @access public
 */
const getAllContacts = asyncHandler(async (req, res) => {
  return res.json({ message: "Get all contacts" });
})

/**
 * @desc Get a contact
 * @route GET /api/contacts/:id
 * @access public
 */
const getContact = asyncHandler(async (req, res) => {
  res.json({ message: `Get contact for ${req.params.id}` });
})

/**
 * @desc Create a contact
 * @route POST /api/contacts/:id
 * @access public
 */
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Informe os campos name, email e phone.");
  }

  res.status(201).json({ message: "Create contact" });
})

/**
 * @desc Update a contact
 * @route PUT /api/contacts/:id
 * @access public
 */
const updateContact = asyncHandler(async (req, res) => {
  res.json({ message: `Update contact for ${req.params.id}` });
})

/**
 * @desc Delete a contact
 * @route DELETE /api/contacts/:id
 * @access public
 */
const deleteContact = asyncHandler(async (req, res) => {
  res.json({ message: `Delete contact for ${req.params.id}` });
})

export { getAllContacts, getContact, createContact, updateContact, deleteContact }