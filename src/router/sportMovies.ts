import express from "express";

import {
  getAllSportMovies,
  getMovieById,
  //   deleteUser,
  //   updateUser,
} from "../controllers/sportMovies";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => {
  router.get(`/all-sport/movies`, getAllSportMovies);
  router.post(`/sports/:id`, getMovieById);
  //   router.delete("/users/:id", deleteUser);
  //   router.patch("/users/:id", updateUser);
};
