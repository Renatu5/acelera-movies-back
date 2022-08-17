import { movie } from "@models/entity/movie"
import { datacatalog } from "googleapis/build/src/apis/datacatalog"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getAllMovies = async (request, response) => {
  try {
    const moviesRepository = getRepository(movie)
    const movies = await moviesRepository.find()
    console.log(movies)
    return response.status(200).json(movies)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getMovieId = async (request, response) => {
  try {
    const id = request.params
    const moviesRepository = getRepository(movie)
    const movieList = await moviesRepository.findOne(id)

    return response.status(200).json(movieList)
  } catch (error) {
    return response.status(404).json(error)
  }
}

export const postMovie = async (request, response) => {
  const moviesRepository = getRepository(movie)
  const addMovie = request.body
  const addNewMovie = await moviesRepository.save(addMovie)

  return response.status(200).json(addNewMovie)
}

export const deleteMovie = async (request, response) => {
  try {
    const moviesRepository = getRepository(movie)
    const id = request.params
    const deleteMovie = await moviesRepository.delete(id)

    return response.status(200).json(deleteMovie)
  } catch (error) {
    return response.status(404).json(error)
  }
}

export const updateMovie = async (request, response) => {
  const { id } = request.params
  const body = request.body
  const moviesRepository = getRepository(movie)
  const updatedMovie = await moviesRepository.update(id, body)

  return response.status(200).json(updatedMovie)
}
