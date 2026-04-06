import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign(
    { id: UserActivation.id, role: user.rle },
    "segredo",
    { expiresIn: "1h" }
  );
};