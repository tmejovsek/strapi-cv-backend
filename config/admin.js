module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '909acbda498efbf5f9abe034986743ed'),
  },
});
