import userService from "../services/userService";

let handleEnrollmentApplication = async (req, res) => {
  let message = await userService.enrollmentApplication(req.body);
  return res.status(200).json(message);
};

module.exports = {
  handleEnrollmentApplication,
};
