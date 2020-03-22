/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @file
 * @author Eduardo Suárez Ojeda
 * @since 23.03.2020
 * @description Programa que obtiene el valor del término pasado por
 * parámetros en la secuencia de fibonacci.
 * 
 */

'use strict';
 /* Primer caso
exports.fibonacci = function fibonacci(n) {
  return 0;
}
*/
 /* Segundo caso
exports.fibonacci = function fibonacci(n) {
  if (n == 0) {
    return 0
  } else {
    return 1;
  }
}
*/
 // Comienza triangular 
/* Cuarto caso

exports.fibonacci = function fibonacci(n) {
  if (n == 0) {
    return 0
  } if (n == 1 || n == 2) {
    return 1;
  } else {
    return 2;
  }
}
*/
 /* Quinto caso
exports.fibonacci = function fibonacci(n) {
  if (n == 0) {
    return 0
  } if (n == 1 || n == 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
*/
 // REFACTORIZACIÓN
exports.fibonacci = function fibonacci(n) {
  const SECUENCIA_FIBONACCI = [0, 1];
  for (let i = 2; i < n + 1; i++){
    SECUENCIA_FIBONACCI.push(SECUENCIA_FIBONACCI[i - 2]
         + SECUENCIA_FIBONACCI[i -1]);
  }
 return SECUENCIA_FIBONACCI[n];
}