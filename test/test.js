const FFBB = require('ffbb-api');

FFBB.fetchLicensee("Antoine", "Dupont")
  .then((licensee) => console.log(licensee))
  .catch((err) => console.error(err));