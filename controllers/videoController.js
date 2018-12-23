import { naflix } from "../db";

export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const videos = (req, res) => {
  res.render("videos", { pageTitle: "Videos", naflix });
};

export const search = (req, res) => {
  const {
    query: { video: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, naflix });
};

export const originals = (req, res) =>
  res.render("originals", { pageTitle: "Originals" });

export const trailers = (req, res) =>
  res.render("trailers", { pageTitle: "Trailers" });

export const show = (req, res) => res.render("show", { pageTitle: "Show" });
