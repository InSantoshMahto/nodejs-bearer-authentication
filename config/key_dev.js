module.exports = {
  // port
  port: 8500,

  // db
  mongoURI: 'mongodb://onsi:onsi@12345@ds021915.mlab.com:21915/auth_dev',

  // MIME json
  json: {
    inflate: true,
    strict: true,
  },

  // static
  static: {
    dotfiles: 'allow',
    etag: true,
    extensions: false,
    lastModified: true,
    redirect: true,
    index: 'index.html',
  },

  // router
  router: {
    caseSensitive: false,
    mergeParams: false,
    strict: false,
  },

  // email
  email: {
    userId: 'noreply@onsi.in',
    password: 'Noreply@12345',
  },
};