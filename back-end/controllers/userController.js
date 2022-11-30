const bcrypt = require('bcrypt');
const db = require('../db');

const saltRounds = 10;

const userController = {};

userController.get = (req, res, next) => {
  const { username, password } = req.query;
  const lookup = `SELECT * FROM users
  WHERE username = $1`;
  db.query(lookup, [username])
    .then((data) => {
      if (data.rows[0].password) {
        bcrypt.compare(password, data.rows[0].password, (err, result) => {
          if (result) res.locals = { status: true, id: data.rows[0].id };
          else res.locals = { status: false };
          return next();
        });
      }
    })
    .catch((error) => {
      res.locals = { status: false };
      console.log(error);
      return next();
    });
};

userController.post = (req, res, next) => {
  const { username, password } = req.query;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    const create = `INSERT INTO Users (username, password)
    VALUES ($1, $2)`;
    db.query(create, [username, hash])
      .then((data) => {
        res.locals = { status: true };
        console.log(data);
        return next();
      })
      .catch((error) => {
        res.locals = { status: false };
        console.log(error);
        return next();
      });
  });
};

module.exports = userController;
