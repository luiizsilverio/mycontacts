import { Router } from "express";
import { currentUser, loginUser, registerUser } from "../controllers/user-controller.js";
import validateToken from "../middleware/validate-token.js";

const router = Router();

router
  .post('/register', registerUser)
  .post('/login', loginUser)
  .get('/current', validateToken, currentUser)
;

export default router;
