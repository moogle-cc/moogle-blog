const HOST = new URL(window.location);
const DOMAIN = HOST.origin;
const BRAND_ICON = `${DOMAIN}/favicon.ico`;
const BRAND_LOGO = DOMAIN.replace("https://", "").replace(".moogle.cc", "");
const WEBSITE = `${DOMAIN}`;
const POSTS_URL = `${DOMAIN}/index.json`;
const CONSTANTS_URL = `${DOMAIN}/constants.json`;
const POST_URL = `${DOMAIN}/post?id=`;
const DEFAULT_POST_STATUS = 'draft';
const FILE_ID_DELIMITER = '/';
const MAX_FOOTER_LENGTH = 250;
const BLANK_FEATURED_IMAGE = "/images/moogle-publish-blog.png"
const config = {
  BRAND_ICON,
  BRAND_LOGO,
  WEBSITE,
  HOST,
  DOMAIN,
  POSTS_URL,
  CONSTANTS_URL,
  POST_URL,
  DEFAULT_POST_STATUS,
  FILE_ID_DELIMITER,
  MAX_FOOTER_LENGTH,
  BLANK_FEATURED_IMAGE,
};

export default config;
