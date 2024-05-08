export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const halfHourInMilliseconds = 30 * 60 * 1000; // Half an hour in milliseconds
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * halfHourInMilliseconds
    ),
    httpOnly: true, // Set httpOnly to true
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
