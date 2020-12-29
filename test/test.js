const FFBB = require('ffbb-api');

FFBB.fetchLicensee("Tony", 'Parker')
  .then((licensee) => console.log(licensee))
  .catch((err) => {
    console.error("Error!")
    console.error(err)
  });