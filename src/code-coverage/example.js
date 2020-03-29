/**
 * @desc Contiene la implementación de la función operations, que
 * permite realizar operaciones aritméticas, obteniendo como
 * resultado la parte entera de la operación.
 * @author Florentín Pérez Glez
 * @version 30.March.2020
 */

"use strict"
 
const addition = require('./addition.js').addition
const subtraction = require('./subtraction.js').subtraction
const multiplication = require('./multiplication.js').multiplication
const division = require('./division.js').division

const ADDITION_CODE = 0;
const SUBTRACTION_CODE = 1;
const MULTIPLICATION_CODE = 2;
const DIVISION_CODE = 3;

/**
 * @desc Función que permite sumar, restar, multiplicar y dividir
 * números. Solo devuelve la parte entera de la operación.
 * @param {Number} operationID - El código de la operación a realizar
 * @param {Number} firstNumber - Primer operando
 * @param {Number} secondNumber -  Segundo operando
 */
exports.operations = (operationID, firstNumber, secondNumber) => {
  if (operationID === ADDITION_CODE) {
    return addition(firstNumber, secondNumber);
  } else if (operationID === SUBTRACTION_CODE) {
    return subtraction(firstNumber, secondNumber);
  } else if (operationID === MULTIPLICATION_CODE) {
    return multiplication(firstNumber, secondNumber);
  } else if (operationID === DIVISION_CODE) {
    return division(firstNumber, secondNumber);
  } else {
    return undefined;
  } 
};