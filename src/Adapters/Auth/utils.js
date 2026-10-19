const jwt = require('jsonwebtoken');
const util = require('util');
const Parse = require('parse/node').Parse;
const getHeaderFromToken = token => {
  const decodedToken = jwt.decode(token, { complete: true });
  if (!decodedToken) {
    throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `provided token does not decode as JWT`);
  }

  return decodedToken.header;
};

/**
 * Returns the signing key from a JWKS client.
 * @param {Object} client The JWKS client.
 * @param {String} key The kid.
 */
async function getSigningKey(client, key, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  const signingKey = await util.promisify(client.getSigningKey)(key);
  if (Date.now() > deadline) {
    throw new Error(`Signing key lookup for ${key} exceeded ${timeoutMs} ms`);
  }
  return signingKey;
}
module.exports = {
  getHeaderFromToken,
  getSigningKey,
};
