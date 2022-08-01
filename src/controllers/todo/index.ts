import { movie } from "@models/entity/ToDo"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const gettAllMovies = (request, response) => {
  // const { page = 0, count = 50 } = request.query
  const movieRepository = getRepository(movie)
  const movies = movieRepository.find()
  return response.json({ movies })
}

export const addNewMovie = (request, response) => {
  const movieRepository = getRepository(movie)
  const movies = movieRepository.save(request.body)
  return response.json({ movies })
}
