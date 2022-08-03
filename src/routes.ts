import {
  deleteMovie,
  getAllMovies,
  getMovieId,
  getTODO,
  itsWorks,
  postMovie,
  updateMovie,
} from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)

  app.get("/movie_list", getAllMovies)
  app.get("/movie_list/:id", getMovieId)
  app.post("/movie_list", postMovie)
  app.put("/movie_list/:id", updateMovie)
  app.delete("/movie_list/:id", deleteMovie)
}
