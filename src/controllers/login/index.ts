// import { Login } from "@models/entity/Login"
// import { getRepository } from "typeorm"

export const postLogin = async (request, response) => {
  const { email, password } = request.body
  if (email === "teste" && password === "1234") {
    return response.json({ message: "Login efetuado" })
  }
  return response.json({ message: "Login inválido" })
}
