const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));
export const registerService = ({ phone, password, name }) =>
  new Promise(async (reslove, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { phone },
        defaults: { phone, name, password: hashPassword(password) },
      });
      const token =
        response[1] &&
        jwt.sign(
          { id: response[0].id, phone: response[0].phone },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      reslove({
        err: token ? 0 : 2,
        mes: token ? "Register success!" : "Register failure",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });

export const LoginService = ({ phone, password }) =>
  new Promise(async (reslove, reject) => {
    try {
      const response = await db.User.findOne({
        where: { phone },
        raw: true,
      });
      const isCheckPassword =
        response && bcrypt.compareSync(password, response.password);
      const token =
        isCheckPassword &&
        jwt.sign(
          { id: response.id, phone: response.phone },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      reslove({
        err: token ? 0 : 2,
        mes: token
          ? "Login success!"
          : response
          ? "Password is incorrect"
          : "Phone not found",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });
