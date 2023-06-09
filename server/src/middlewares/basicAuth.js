export const authentication = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const auth = new Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
    next()


};
