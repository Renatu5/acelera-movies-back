import {
  addNewMovie,
  gettAllMovies,
  getTODO,
  itsWorks,
} from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)

  app.get("/movie_list", gettAllMovies)
  app.post("/movie_list", addNewMovie)
}
