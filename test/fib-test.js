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
const fib = require('../src/tdd/fib.js');
const fibonacci = fib.fibonacci;

describe('Probando función Fibonacci', () => {
   // Primera parte test
  it('Caso cero', () => {
    expect(fibonacci(0)).to.equal(0);
  });
   // Segundo test
  it('Caso uno', () => {
    expect(fibonacci(1)).to.equal(1);
  });
   // Comienza triangular
   // Tercer test - va a pasar
  it('caso 2', () => {
    expect(fibonacci(2)).to.equal(1);
  });
  // Cuarto test
  it('caso 3', () => {
    expect(fibonacci(3)).to.equal(2);
  });
  // Quinto test
  it('caso 4', () => {
    expect(fibonacci(4)).to.equal(3);
  });
});