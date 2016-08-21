import { Beta as _Beta } from './continuous/beta';
import { Binomial as _Binomial } from './discrete/binomial';
import { ChiSquare as _ChiSquare } from './continuous/chiSquare';
import { Exponential as _Exponential } from './continuous/exponential';
import { Gamma as _Gamma } from './continuous/gamma';
import { Geometric as _Geometric } from './discrete/geometric';
import { Hypergeometric as _Hypergeometric } from './discrete/hypergeometric';
import { NegativeBinomial as _NegativeBinomial } from './discrete/negativeBinomial';
import { Normal as _Normal } from './continuous/normal';
import { Poisson as _Poisson } from './discrete/poisson';
import { Uniform as _Uniform } from './continuous/uniform';

const beta = (alpha, beta) => {
  return new _Beta(alpha, beta);
}

const binomial = (p, n) => {
  return new _Binomial(p, n);
}

const chiSquare = (v) => {
  return new _ChiSquare(v);
}

const exponential = (beta) => {
  return new _Exponential(beta);
}

const gamma = (alpha, beta) => {
  return new _Gamma(alpha, beta);
}

const geometric = (p) => {
  return new _Geometric(p);
}

const hypergeometric = (n, N, r) => {
  return new _Hypergeometric(n, N, r);
}

const negativeBinomial = (p, r) => {
  return new _NegativeBinomial(p, r);
}

const normal = (mu, sigma) => {
  return new _Normal(mu, sigma);
}

const poisson = (lambda) => {
  return new _Poisson(lambda);
}

const uniform = (theta1, theta2) => {
  return new _Uniform(theta1, theta2);
}

module.exports = {
  beta,
  binomial,
  chiSquare,
  exponential,
  gamma,
  geometric,
  hypergeometric,
  negativeBinomial,
  normal,
  poisson,
  uniform
}