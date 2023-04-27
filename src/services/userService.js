import db from "../models";

let checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: email },
      });

      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (err) {
      reject(err);
    }
  });
};

let enrollmentApplication = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let isExist = await checkUserEmail(data.email);

      if (isExist === true) {
        resolve({
          errCode: 1,
          message: "This email is already in use!",
        });
      } else {
        const user = await db.User.create({
          name: data.name,
          phoneNumber: data.phoneNumber,
          email: data.email,
          school: data.school,
          address: data.address,
          major: data.major,
          location: data.location,
        });
        resolve({
          errCode: 0,
          message: "apply is successful",
          user: user,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  enrollmentApplication,
};
