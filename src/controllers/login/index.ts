// import { Login } from "@models/entity/Login"
// import { getRepository } from "typeorm"
import { User } from "@models/entity/Login"
import { getRepository } from "typeorm"
import md5 from "md5"

export const getLogin = async (request, response) => {
  const { email, password } = request.body
  if (email === "teste" && password === "1234") {
    return response.json({ message: "Login efetuado" })
  }
  return response.json({ message: "Login inválido" })
}

export const postUsers = async (request, response) => {
  const { name, email, password } = request.body
  const userRepositroy = getRepository(User)
  const user = await userRepositroy.save({
    name: name,
    email: email,
    password: md5(password),
  })
  return response.status(200).json(user)
}

export const getUsers = async (request, response) => {
  const usersRepositroy = getRepository(User)
  const users = await usersRepositroy.find()

  return response.status(200).json(users)
}
