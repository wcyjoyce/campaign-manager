module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in to proceed." }); // HTTP status: unauthorised/forbidden
  } else {
    next();
  }
};

// "next" is called when our middleware function has finished running (similar to "done" callback)
// "next" is useful because there may be multiple middlewares - instructs to proceed to next middleware
