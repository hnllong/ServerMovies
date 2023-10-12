import express from "express";

import { getTokenAgora } from "../controllers/agora";

export default (router: express.Router) => {
  router.get("/call-agora", getTokenAgora);
};
