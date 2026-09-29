import { betaLabel } from './GtProbeBeta';

/**
 * GT probe (DS): half of a deliberate two-module import cycle (ESM).
 * @returns {string} a label built from the sibling module
 */
export function alphaLabel() {
  return `alpha:${betaLabel()}`;
}
