import mongoose from "mongoose";

// User Config
const SportMoviesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  video: { type: String, required: true },
  describe: { type: String, required: true },
});

export const SportMoviesModel = mongoose.model(
  "SportMovies",
  SportMoviesSchema
);

// User Actions
export const getAll = () => SportMoviesModel.find();
// export const getUserByEmail = (email: string) => UserModel.findOne({ email });
// export const getUserBySessionToken = (sessionToken: string) =>
//   UserModel.findOne({ "authentication.sessionToken": sessionToken });
export const getMoviesById = (id: string) => SportMoviesModel.findById(id);
// export const createUser = (values: Record<string, any>) =>
//   new UserModel(values).save().then((user) => user.toObject());
// export const deleteUserById = (id: string) =>
//   UserModel.findOneAndDelete({ _id: id });
// export const updateUserById = (id: string, values: Record<string, any>) =>
//   UserModel.findByIdAndUpdate(id, values);
