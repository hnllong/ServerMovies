import express from "express";

import authentication from "./authentication";
import users from "./users";
import sportMovies from "./sportMovies";
import agora from "./agora";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  sportMovies(router);
  agora(router);
  return router;
};
