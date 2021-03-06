// This file is in "public/" for a reason: these things are in github
// and should not be considered private or protected, including the
// private keys
module.exports = {
  domain: 'api.abcaudits.trelisfw.io',
  baseuri: 'https://api.abcaudits.trelisfw.io/',
  logo: 'logo.svg',
  name: 'ABC Audits',
  tagline: 'Audits done right!',
  color: '#9fc5f8',
  hint: {
    username: 'audrey',
    password: 'test',
  },
  idService: {
    shortname: 'trellisfw',
    longname: 'Trellis Framework',
  },

  // To generate keys: 
  // 1: create key pair: openssl genrsa -out private_key.pem 2048
  // 2: extract public key: openssl rsa -pubout -in private_key.pem -out public_key.pem
  // Use pem-jwk to convert public key to jwk for the unsigned software statement
  keys: {
    public: 'public_key.pem',
    private: {
      // Use the first (and only) key in software statement:
      kid: require('./unsigned_software_statement').jwks.keys[0].kid,
      // Read the private key from the private key file:
      pem: require('fs').readFileSync(__dirname+'/private_key.pem'),
    }
  },
  unsigned_software_statement: require('./unsigned_software_statement.js'),
  software_statement: require('./signed_software_statement.js'),
};
