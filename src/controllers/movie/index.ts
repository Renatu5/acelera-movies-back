import { movie } from "@models/entity/movie"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getAllMovies = async (request, response) => {
  const moviesRepository = getRepository(movie)
  const movies = await moviesRepository.find()
  console.log(movies)
  return response.status(200).json(movies)
}

export const getMovieId = async (request, response) => {
  const moviesRepository = getRepository(movie)
  const movieList = await moviesRepository.findOne(request.params)

  return response.status(200).json({ movieList })
}

export const postMovie = async (request, response) => {
  const moviesRepository = getRepository(movie)
  const addMovie = request.body
  const addNewMovie = await moviesRepository.save(addMovie)

  return response.status(200).json(addNewMovie)
}

export const deleteMovie = async (request, response) => {
  const moviesRepository = getRepository(movie)
  const id = request.params
  const deleteMovie = await moviesRepository.delete(id)

  return response.status(200).json(deleteMovie)
}

export const updateMovie = async (request, response) => {
  const { id } = request.params
  const body = request.body
  const moviesRepository = getRepository(movie)
  const updatedMovie = await moviesRepository.update(id, body)

  return response.status(200).json(updatedMovie)
}
