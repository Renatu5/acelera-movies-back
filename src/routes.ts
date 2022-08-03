import { getAllMovies, getMovieId, getTODO, itsWorks } from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)

  app.get("/movie_list", getAllMovies)
  app.get("/movie_list/:id", getMovieId)
}
