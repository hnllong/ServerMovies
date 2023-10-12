import express from "express";

import authentication from "./authentication";
import users from "./users";
import sportMovies from "./sportMovies";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  sportMovies(router);
  return router;
};
