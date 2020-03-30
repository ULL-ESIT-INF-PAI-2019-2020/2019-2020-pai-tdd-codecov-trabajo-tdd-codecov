/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @file
 * @author Eduardo Suárez Ojeda
 * @since 28.03.2020
 * @description Programa de pruebas para la presentación sobre TDD y Code Coverage
 * Tiene dos funciones que se usan en la práctica anterior, para calcular el convex
 * hull de un conjunto de puntos.
 * 
 */

'use strict';

// /**
//  * @description Calcula la distancia mínima entre un punto y una recta.
//  * (| -m * x + y - n |) / ((m * m) + 1)^(1 / 2)
//  * @param {object} punto
//  * @param {object} recta
//  * @returns {Number} - Distancia entre punto y recta.
//  */
// exports.distanciaPuntoARecta = function distanciaPuntoARecta(punto, recta) {
//   return 0;
// }

/**
 * @description Calcula la distancia mínima entre un punto y una recta.
 * (| -m * x + y - n |) / ((m * m) + 1)^(1 / 2)
 * @param {object} punto
 * @param {object} recta
 * @returns {Number} - Distancia entre punto y recta.
 */
function distanciaPuntoARecta(punto, recta) {
  const NUMERADOR = Math.abs((-(recta.m) * punto.x) + punto.y - recta.n);
  const DENOMINADOR = Math.sqrt((recta.m * recta.m) + 1);
  return (NUMERADOR / DENOMINADOR);
}
exports.distanciaPuntoARecta = distanciaPuntoARecta;

/**
 * @description Calcula el punto más alejado de la recta pasada por
 * parámetros para crear la nueva línea en el convex hull.
 * @param {array} arrayPuntos
 * @param {object} recta
 * @returns {Object} - Devuelve el punto más alejado de la recta.
 */
exports.puntoMasAlejado = function puntoMasAlejado(arrayPuntos, recta) {
  let maxDistancia = distanciaPuntoARecta(arrayPuntos[0], recta);
  let puntoLejano = arrayPuntos[0];
  for (let i = 1; i < arrayPuntos.length; i++) {
    if (maxDistancia < distanciaPuntoARecta(arrayPuntos[i], recta)) {
      maxDistancia = distanciaPuntoARecta(arrayPuntos[i], recta);
      puntoLejano = arrayPuntos[i];
    }
  }
  return puntoLejano;
}