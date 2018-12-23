// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User

const USERS = "/users";
const USER_PROFILE = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos

const VIDEOS = "/videos";
const TRAILERS = "/trailers";
const ORIGINALS = "/originals";
const SHOW = "/:id";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userProfile: id => {
    if (id) {
      return `/${id}`;
    } else {
      return USER_PROFILE;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  show: id => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return SHOW;
    }
  },
  trailers: TRAILERS,
  originals: ORIGINALS
};

export default routes;
