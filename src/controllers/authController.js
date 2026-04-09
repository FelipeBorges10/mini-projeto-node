import bcrypt from "bcrypt";
import * as userModel from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica se email e senha foram enviados
    if (!email || !password) {
      return res.status(400).json({ message: "Email e senha são obrigatórios" });
    }

    // Busca o usuário pelo email
    const user = await userModel.findByEmail(email);

    // Verifica se o usuário existe
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Compara a senha informada com a senha criptografada
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    // Gera o token
    const token = generateToken(user);

    // Retorna sucesso com token
    return res.status(200).json({
      message: "Login realizado com sucesso",
      token,
      user: {
        id: user.id,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};