import { asyncWrapper } from "../middlewares/asyncWrapper.js";
import { shortLinkModel } from "../models/shortLink.model.js";
import alphanumeric from "alphanumeric-id";
import os from "os";
import { identifyPlatform } from "../services/shortLink.services.js";

export const getShortLinks = asyncWrapper(async (req, res) => {
  const allShortLinks = await shortLinkModel.find();
  return res.status(200).json({ allShortLinks });
});

export const createShortLink = asyncWrapper(async (req, res) => {
  const urlData = req.body;
  if (urlData.slug === "") urlData.slug = alphanumeric(8);

  const isSlugExists = await shortLinkModel.findOne({ slug: urlData.slug });

  if (isSlugExists) return res.status(404).json({ msg: "Slug already exists" });

  const shortenUrls = await shortLinkModel.create(urlData);
  res.status(200).json({ shortenUrls });
});

export const updateShortLinkSlug = asyncWrapper(async (req, res) => {
  const update = req.body;

  let updatedLink = await shortLinkModel.findOneAndUpdate(
    { slug: req.params.slugId },
    update
  );
  res.status(200).json({ updatedLink });
});

export const shortLinkRedirection = asyncWrapper(async (req, res) => {
  const slugId = req.params.slugId;
  const isSlugExist = await shortLinkModel.findOne({ slug: slugId });

  let platform = os.platform();
  platform = identifyPlatform(platform);

  if (isSlugExist) {
    const redirectionUrl = isSlugExist[platform];
    return res.status(200).json({Url: redirectionUrl["primary"]});
  }
  res.status(404).json({ msg: "Page Not Found" });
});
