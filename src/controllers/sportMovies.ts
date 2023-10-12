import express from "express";

import { getAll, getMoviesById } from "../db/moviesSpt";

export const getAllSportMovies = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getAll();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getMovieById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const movieById = await getMoviesById(id);
    return res.status(200).json(movieById);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// export const deleteUser = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     const { id } = req.params;

//     const deletedUser = await deleteUserById(id);

//     return res.json(deletedUser);
//   } catch (error) {
//     console.log(error);
//     return res.sendStatus(400);
//   }
// };

// export const updateUser = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     const { id } = req.params;
//     const { username } = req.body;

//     if (!username) {
//       return res.sendStatus(400);
//     }

//     const user = await getUserById(id);

//     user.username = username;
//     await user.save();

//     return res.status(200).json(user).end();
//   } catch (error) {
//     console.log(error);
//     return res.sendStatus(400);
//   }
// };
