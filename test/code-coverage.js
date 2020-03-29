/**
 * @desc Contiene la implementación de las pruebas a las que
 * se someterá la función operations de src/code-coverage.
 * @author FLorentín Pérez Glez
 * @version 30.March.2020
 */

"use strict"

const operations = require('../src/code-coverage/example.js').operations
const chai = require('chai');

describe('Operations', function () {
  it ('Should be a function', function () {
    chai.expect(operations).to.be.a('function');
  });
  it ('Should works fine', function() {
    chai.expect(operations(0, 2, 3)).to.be.equal(5);
    chai.expect(operations(1, 2, 3)).to.be.equal(-1);
    chai.expect(operations(2, 2, 3)).to.be.equal(6);
    chai.expect(operations(3, 4, 2)).to.be.equal(2);
  });
});