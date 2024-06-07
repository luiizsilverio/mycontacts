import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { User } from "../models/user-model.js";

/**
 * @desc Register a user
 * @route POST /api/users/register
 * @access public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Informe os campos username, email e password.");
  }

  const userAvailable = await User.findOne({ email }, {select: { id: true }});

  if (userAvailable) {
    res.status(400);
    throw new Error("Usuário já registrado!");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashedPassword
  })

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("Dados do usuário inválidos");
  }
})

/**
 * @desc Login user
 * @route POST /api/users/login
 * @access public
 */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Informe os campos email e password.");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("Usuário não autorizado");
  }

  // compare password with hashedPassword

  const passwordOk = await bcrypt.compare(password, user.password);
  
  if (passwordOk) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        }
      }, 
      process.env.JWT_SECRET,
      {
        expiresIn: '1d'
      }
    );

    res.status(200).json({ accessToken });
  }
  else {
    res.status(401);
    throw new Error("E-mail ou senha incorreta");
  }
})

/**
 * @desc Current user info
 * @route GET /api/users/current
 * @access private
 */
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
})

export { registerUser, loginUser, currentUser }