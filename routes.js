// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/LOGIN";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User

const USERS = "/users";
const USER_DETAIL = ":/id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos

const VIDEOS = "/videos";
const SHOW = "/:id/show";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  show: SHOW
};

export default routes;
