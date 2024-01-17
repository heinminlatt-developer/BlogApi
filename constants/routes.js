exports.userRouteConst = {
    getUserById: "/",
    updateUserById: "/",
    updateUserStatus: "/change_status",
    getSelfDetails: "/me",
    getUserFilter: "/filter",
    deleteUser: "/",
    deleteUserById: "/delete",
  };
  exports.authRouteConst = {
    signup: "/signup",
    signin: "/signin",
    verification: "/verification/:token",
    logout: "/logout",
    getRefreshToken: "/refresh_token",
  };

  exports.blogRouteConst = {
    initialBlog: "/",
    createBlog: "/create",
  };

