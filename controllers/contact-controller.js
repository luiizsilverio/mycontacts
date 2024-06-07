import asyncHandler from "express-async-handler";

import { Contact } from "../models/contact-model.js";

/**
 * @desc Get all contacts
 * @route GET /api/contacts
 * @access public
 */
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  return res.json(contacts);
})

/**
 * @desc Get a contact
 * @route GET /api/contacts/:id
 * @access public
 */
const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id);

  if (!contact) {
    res.status(404);
    throw new Error("Contato não encontrado");
  }

  res.json(contact);
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

  const contact = await Contact.create({
    name,
    email,
    phone
  })

  res.status(201).json(contact);
})

/**
 * @desc Update a contact
 * @route PUT /api/contacts/:id
 * @access public
 */
const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Informe os campos name, email e phone.");
  }

  const contactExists = await Contact.findById(id, {
    select: {
      id: true,
    }
  });

  if (!contactExists) {
    res.status(404);
    throw new Error("Contato não encontrado");
  }

  const contact = await Contact.findByIdAndUpdate(
    id, 
    req.body,
    { new: true }
  )

  res.json(contact);
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