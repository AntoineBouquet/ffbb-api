const ffbb = require('./ffbb');

exports.fetchLicensee = function(firstName, lastName, licensee, gender = 'M', association, birthDate, nationalId) {
  var param = {
    firstName: firstName,
    lastName: lastName,
    licensee: licensee,
    gender: gender,
    birthDate: birthDate,
    nationalId: nationalId,
    association: association
  };

  return new Promise((resolve, reject) => {
    ffbb.fetchLicense(param, (licensee, err) => {
      if (err) {
        reject(err);
      } else {
        resolve(licensee);
      }
    });
  });
}