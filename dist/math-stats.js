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
	return new _beta2._Beta(alpha, _beta);
};

var binomial = function binomial(p, n) {
	return new _binomial._Binomial(p, n);
};

var chiSquare = function chiSquare(v) {
	return new _chiSquare._ChiSquare(v);
};

var exponential = function exponential(beta) {
	return new _exponential._Exponential(beta);
};

var gamma = function gamma(alpha, beta) {
	return new _gamma._Gamma(alpha, beta);
};

var geometric = function geometric(p) {
	return new _geometric._Geometric(p);
};

var hypergeometric = function hypergeometric(n, N, r) {
	return new _hypergeometric._Hypergeometric(n, N, r);
};

var negativeBinomial = function negativeBinomial(p, r) {
	return new _negativeBinomial._NegativeBinomial(p, r);
};

var normal = function normal(mu, sigma) {
	return new _normal._Normal(mu, sigma);
};

var poisson = function poisson(lambda) {
	return new _poisson._Poisson(lambda);
};

var uniform = function uniform(theta1, theta2) {
	return new _uniform._Uniform(theta1, theta2);
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