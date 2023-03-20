const express = require('express');
const planetController = require('../controllers/planet.controller');

const planetRouter = express.Router();

/**
 * @swagger
 * /planets:
 *  get:
 *      description: To get list of all planets
 *      response:
 *          '200':
 *              description: Success
*/
planetRouter.get('/', planetController.getPlanets);
planetRouter.get('/:id', planetController.getPlanet);
planetRouter.get('/color/:color', planetController.getPlanetsbyColor);
planetRouter.post('/', planetController.postPlanet);
planetRouter.put('/:id', planetController.putPlanet);
planetRouter.delete('/:id', planetController.deletePlanet);

module.exports = planetRouter;