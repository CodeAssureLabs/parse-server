import { alphaLabel } from './GtProbeAlpha';

/**
 * GT probe (DS): the other half of the deliberate import cycle (ESM).
 * @returns {string} a constant label; alphaLabel is referenced to close the cycle
 */
export function betaLabel() {
  return typeof alphaLabel === 'function' ? 'beta' : 'beta';
}
