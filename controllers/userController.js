import routes from "../routes";

//Join
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log User In
    res.redirect(routes.videos);
  }
};

// Login
export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "LogIn" });
};
export const postLogin = (req, res) => {
  res.redirect(routes.videos);
};

// Logout
export const logout = (req, res) => {
  res.redirect(routes.home);
};

// User
export const userProfile = (req, res) =>
  res.render("userProfile", { pageTitle: "Profile" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
