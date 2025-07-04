const BaseJoi = require("joi");
const sanitizeHtml = require("sanitize-html");

const extension = (joi) => ({
  type: "string",
  base: joi.string(),
  messages: {
    "string.escapeHTML": "{{#label}} must not include HTML!",
  },
  rules: {
    escapeHTML: {
      validate(value, helpers) {
        const clean = sanitizeHtml(value, {
          allowedTags: [],
          allowedAttributes: {},
        });
        if (clean !== value)
          return helpers.error("string.escapeHTML", { value });
        return clean;
      },
    },
  },
});

const Joi = BaseJoi.extend(extension);

module.exports.PostSchema = Joi.object({
  post: Joi.object({
    title: Joi.string().required().escapeHTML(),
    // image: Joi.string().required(),
    date: Joi.string().required().escapeHTML(),
    post: Joi.string().required().escapeHTML(),
  }).required(),
  deleteImages: Joi.array(),
});

module.exports.commentsSchema = Joi.object({
  comment: Joi.object({
    body: Joi.string().required().escapeHTML(),
  }).required(),
});
