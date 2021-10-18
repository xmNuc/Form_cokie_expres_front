const express = require('express');

const cookieRouter = express.Router();

cookieRouter
  .post('/set', (req, res) => {
    const { name } = req.body;

    res
      .cookie('name', name, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
      .send(`Name was saved`);
  })
  .get('/show', (req, res) => {
    const { name } = req.cookies;
    res.send(name);
  })
  .get('/check', (req, res) => {
    const { name } = req.cookies;
    res.send(name === undefined ? 'Nothing was saved' : 'Information is saved');
  });

module.exports = {
  cookieRouter,
};
