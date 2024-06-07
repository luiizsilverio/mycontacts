import { Router } from "express";
import validateToken from "../middleware/validate-token.js";

import { 
  createContact, 
  deleteContact, 
  getAllContacts, 
  getContact, 
  updateContact 
} from "../controllers/contact-controller.js";

const router = Router();

router.use(validateToken);

router
  .get('/', getAllContacts)
  .get('/:id', getContact)
  .post('/', createContact)
  .put('/:id', updateContact)
  .delete('/:id', deleteContact);

export default router;
