import { Router } from "express";
import { authentication } from "../middlewares/basicAuth.js";
import {
  getShortLinks,
  createShortLink,
  updateShortLinkSlug,
  shortLinkRedirection,
} from "../controllers/shortLink.controller.js";

export const shortLinkRouter = Router();

shortLinkRouter
  .get("/shortlinks", getShortLinks)
  .post("/shortlinks", createShortLink)
  .put("/shortlinks/:slugId", updateShortLinkSlug)
  .get("/shortlinks/:slugId", shortLinkRedirection);
