export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) =>
  res.render("search", { pageTitle: "search" });
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });
export const originals = (req, res) =>
  res.render("originals", { pageTitle: "Originals" });
export const trailers = (req, res) =>
  res.render("trailers", { pageTitle: "Trailers" });
export const show = (req, res) => res.render("show", { pageTitle: "Show" });
