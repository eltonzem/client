module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8d4ed1f470451a7938babbb8b83f4158'),
  },
});
