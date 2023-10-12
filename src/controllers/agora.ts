import express from "express";

import { getToken, getTokenById } from "../db/agora";

export const getTokenAgora = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    await getToken();
    const token = await getTokenById();
    // console.log('token', )

    console.log("token", token);

    return res.status(200).json(token);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
