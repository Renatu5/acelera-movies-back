import { getLogin, getUsers, postUsers } from "@controllers/login"
import {
  deleteMovie,
  getAllMovies,
  getMovieId,
  itsWorks,
  postMovie,
  updateMovie,
} from "@controllers/movie"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)

  app.post("/users", postUsers)
  app.get("/login", getLogin)
  app.get("/users", getUsers)

  app.get("/movie", getAllMovies)
  app.get("/movie/:id", getMovieId)
  app.post("/movie", postMovie)
  app.put("/movie/:id", updateMovie)
  app.delete("/movie/:id", deleteMovie)
}
