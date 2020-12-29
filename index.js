const ffbb = require('./ffbb');

exports.fetchLicensee = function(firstName, lastName, licenceId, gender = 'M', association, birthDate, nationalId) {
  var param = {
    firstName: firstName,
    lastName: lastName,
    licenseId: licenceId,
    gender: gender,
    birthDate: birthDate,
    nationalId: nationalId,
    association: association
  };

  return new Promise((resolve, reject) => {
    ffbb.fetchLicense(param, (err, licensee) => {
      if (err) {
        reject(err);
      } else {
        resolve(licensee);
      }
    });
  });
}