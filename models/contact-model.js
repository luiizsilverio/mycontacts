import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Informe o nome do contato"]
  },
  email: {
    type: String,
    required: [true, "Informe o e-mail do contato"]
  },
  phone: {
    type: String,
    required: [true, "Informe o telefone do contato"]
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
}, {
  timestamps: true, // cria os campos createdAt e updatedAt
})

const Contact = mongoose.model("Contact", contactSchema);

export { Contact }
