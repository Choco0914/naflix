import routes from "../routes";

export const homeIsAuthenticatedMiddleware = (req, res, next) => {
  let checkUser = (res.locals.user = {
    isAuthenticated: false,
    id: 1
  });
  if (checkUser.isAuthenticated) {
    return res.redirect(routes.videos);
  } else {
    next();
  }
};
export const videoIsAuthenticatedMiddleware = (req, res, next) => {
  let checkUser = (res.locals.user = {
    isAuthenticated: false,
    id: 1
  });
  if (checkUser.isAuthenticated) {
    next();
  } else {
    return res.redirect(routes.home);
  }
};
