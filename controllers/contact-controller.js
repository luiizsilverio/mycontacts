import asyncHandler from "express-async-handler";

import { Contact } from "../models/contact-model.js";

/**
 * @desc Get all contacts
 * @route GET /api/contacts
 * @access private
 */
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  return res.json(contacts);
})

/**
 * @desc Get a contact
 * @route GET /api/contacts/:id
 * @access private
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
 * @access private
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
    phone,
    user_id: req.user.id
  })

  res.status(201).json(contact);
})

/**
 * @desc Update a contact
 * @route PUT /api/contacts/:id
 * @access private
 */
const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Informe os campos name, email e phone.");
  }

  const contactExists = await Contact.findById(id);

  if (!contactExists) {
    res.status(404);
    throw new Error("Contato não encontrado");
  }

  if (contactExists.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("Você não tem permissão para alterar contatos de outro usuário");
  }

  const contact = await Contact.findByIdAndUpdate(
    id, 
    req.body,
    { new: true } // retorna o documento atualizado
  )

  res.json(contact);
})

/**
 * @desc Delete a contact
 * @route DELETE /api/contacts/:id
 * @access private
 */
const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id);

  if (!contact) {
    res.status(404);
    throw new Error("Contato não encontrado");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("Você não tem permissão para excluir contatos de outro usuário");
  }

  await Contact.findByIdAndDelete(id);

  res.json(contact);
})

export { getAllContacts, getContact, createContact, updateContact, deleteContact }