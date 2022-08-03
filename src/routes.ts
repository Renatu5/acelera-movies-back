import {
  getAllMovies,
  getMovieId,
  getTODO,
  itsWorks,
  postMovie,
} from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)

  app.get("/movie_list", getAllMovies)
  app.get("/movie_list/:id", getMovieId)
  app.post("/movie_list", postMovie)
}
