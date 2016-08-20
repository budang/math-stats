'use strict';

var _beta2 = require('./continuous/beta');

var _binomial = require('./discrete/binomial');

var _chiSquare = require('./continuous/chiSquare');

var _exponential = require('./continuous/exponential');

var _gamma = require('./continuous/gamma');

var _geometric = require('./discrete/geometric');

var _hypergeometric = require('./discrete/hypergeometric');

var _negativeBinomial = require('./discrete/negativeBinomial');

var _normal = require('./continuous/normal');

var _poisson = require('./discrete/poisson');

var _uniform = require('./continuous/uniform');

var beta = function beta(alpha, _beta) {
  return new _beta2.Beta(alpha, _beta);
};

var binomial = function binomial(p, n) {
  console.log(_binomial.Binomial);
  return new _binomial.Binomial(p, n);
};

var chiSquare = function chiSquare(v) {
  return new _chiSquare.ChiSquare(v);
};

var exponential = function exponential(beta) {
  return new _exponential.Exponential(beta);
};

var gamma = function gamma(alpha, beta) {
  return new _gamma.Gamma(alpha, beta);
};

var geometric = function geometric(p) {
  return new _geometric.Geometric(p);
};

var hypergeometric = function hypergeometric(n, N, r) {
  return new _hypergeometric.Hypergeometric(n, N, r);
};

var negativeBinomial = function negativeBinomial(p, r) {
  return new _negativeBinomial.NegativeBinomial(p, r);
};

var normal = function normal(mu, sigma) {
  return new _normal.Normal(mu, sigma);
};

var poisson = function poisson(lambda) {
  return new _poisson.Poisson(lambda);
};

var uniform = function uniform(theta1, theta2) {
  return new _uniform.Uniform(theta1, theta2);
};

module.exports = {
  beta: beta,
  binomial: binomial,
  chiSquare: chiSquare,
  exponential: exponential,
  gamma: gamma,
  geometric: geometric,
  hypergeometric: hypergeometric,
  negativeBinomial: negativeBinomial,
  normal: normal,
  poisson: poisson,
  uniform: uniform
};