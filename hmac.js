const { randomBytes, createHmac } = require('crypto');

const createSecretKey = () => randomBytes(32).toString('hex')

const createHMAC = (key, data) => {
  const hmac = createHmac('sha256', key);
  hmac.update(data);
  return hmac.digest('hex');
}

module.exports = { createSecretKey, createHMAC }