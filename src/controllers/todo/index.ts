import { movie } from "@models/entity/movie"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getAllMovies = async (request, response) => {
  try {
    const movieRepository = getRepository(movie)
    const movies = await movieRepository.find()
    console.log(movies)
    return response.status(200).json(movies)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getMovieId = (request, response) => {
  try {
    const id = request.params
    const movieRepository = getRepository(movie)
    const movieList = movieRepository.find(id)

    return response.status(200).json(movieList)
  } catch (error) {
    return response.status(404).json(error)
  }
}

export const postMovie = async (request, response) => {
  try {
    const movieRepository = getRepository(movie)
    const addMovie = request.body
    const addNewMovie = await movieRepository.save(addMovie)

    return response.status(200).json(addNewMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}
