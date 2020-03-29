/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @file
 * @author Eduardo Suárez Ojeda
 * @since 23.03.2020
 * @description Programa de testeo por medio de TDD (Test Driven Development)
 * para validar el programa fib.js, en concreto su función fibonacci, que
 * calcula el valor de fibonacci para el número de secuencia dado.
 * 
 */

'use strict';
 // Añadiendo modulo chai
const chai = require('chai');
const expect = chai.expect;
 // Añadiendo mi programa
const PMA = require('../src/tdd/punto-mas-alejado.js');
const distanciaPuntoARecta = PMA.distanciaPuntoARecta;
const puntoMasAlejado = PMA.puntoMasAlejado;

describe('Probando funciones de ConvexHull', () => {
  const ORIGEN = {x: 0, y: 0};
  let punto1 = {x: 1, y: 8};
  let punto2 = {x: -2, y:4};
  let punto3 = {x: 3, y: -2};
  let recta1 = {m: 1, n: 0};
  let recta2 = {m: 2, n: 4};
  const ARRAY_PUNTOS = [punto1, punto2, punto3];
  context('Probando la funcion distanciaPuntoARecta', () => {
    it('Caso distancia 0', () => {
      expect(distanciaPuntoARecta(ORIGEN, recta1)).to.equal(0);
    });
    it('Caso mas complejo', () => {
      expect(parseFloat((distanciaPuntoARecta(punto1, recta1)).toFixed(3))).to.equal(4.950);
    });
  });
  context('Probando la funcion puntoMasAlejado', () => {
    it('Punto mas alejado del array', () => {
      expect(puntoMasAlejado(ARRAY_PUNTOS, recta2)).to.equal(punto3);
      expect(puntoMasAlejado(ARRAY_PUNTOS, recta1)).to.equal(punto1);
    });
  });
});