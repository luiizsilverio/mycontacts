import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Informe o nome do usuário"]
  },
  email: {
    type: String,
    required: [true, "E-mail já está sendo utilizado"]
  },
  password: {
    type: String,
    required: [true, "Informe a senha do usuário"]
  }
}, {
  timestamps: true, // cria os campos createdAt e updatedAt
})

const User = mongoose.model("User", userSchema);

export { User }
