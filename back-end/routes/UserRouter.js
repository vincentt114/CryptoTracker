const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get(
  '/',
  userController.get,
  (req, res) => {
    res.status(200).send(res.locals);
  },
);

router.post(
  '/',
  userController.post,
  (req, res) => {
    res.status(200).send(res.locals);
  },
);

module.exports = router;
