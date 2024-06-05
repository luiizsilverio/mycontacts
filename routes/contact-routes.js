import { Router } from "express";

import { 
  createContact, 
  deleteContact, 
  getAllContacts, 
  getContact, 
  updateContact 
} from "../controllers/contact-controller.js";

const router = Router();

router
  .get('/', getAllContacts)
  .get('/:id', getContact)
  .post('/', createContact)
  .put('/:id', updateContact)
  .delete('/:id', deleteContact);

export default router;
