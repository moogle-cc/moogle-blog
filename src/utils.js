import moment from 'moment';

export function getPostIdFromPost(post){
   return post ? post.filepath.split('/').pop().split('-').pop().substring(0,6) : undefined;
}

export function flattenPostTitle(post_title){
  return post_title.replace(/\W+/g, '-').replace(/^-/,'').replace(/-$/,'').toLowerCase();
}

export function getPostPrefixFromConstants(constants) { return constants && constants.POST_PREFIX ? constants.POST_PREFIX : ''; }
export function getPostUrl(postId, postUrl, config, constants) { 
  let postPrefix = getPostPrefixFromConstants(constants);
  return `${config.HOST.origin}${postPrefix}/${postId}/${postUrl}`;
}

export function getPostUrlFromPost(post, config, constants) { 
  let postId = getPostIdFromPost(post)
  let postUrl = flattenPostTitle(post.post_title);
  let postPrefix = getPostPrefixFromConstants(constants);
  return `${config.HOST.origin}${postPrefix}/${postId}/${postUrl}`;
}

export function updateCssVariables(constants, root){
  if(constants && root){
    if(constants.LINK_COLOR) root.style.setProperty("--moogle-link-text-color", constants.LINK_COLOR);
    if(constants.FONT_PRIMARY) root.style.setProperty("--moogle-font", constants.FONT_PRIMARY);
    if(constants.FONT_FALLBACK) root.style.setProperty("--moogle-font-fallback", constants.FONT_FALLBACK);
  }
}

export function stripCRLFTDoubleQuotesFromHTML(html) {
  return html.replace(/[\n\r\t]/g, "").replace(/"/g, "'");
}

export function getMoment(UTS){
  let date = new Date(UTS * 1000);
  //check if UTS is already in milliseconds
  //if so, don't multiply by 1000
  if(Math.floor(UTS/Date.now() + 0.5) === 1){
    date = new Date(UTS);
  }
  return moment(date);
};

export function convertTime(UTS) {
    return getMoment(UTS).fromNow();
};

export function getSocialFragment(url){
  let classString = '';
  if(url && url.trim().length > 0){
    if(url.toLowerCase().indexOf('https://twitter.com') === 0) classString = 'fab fa-twitter';
    if(url.toLowerCase().indexOf('https://www.facebook.com') === 0) classString = 'fab fa-facebook';
    if(url.toLowerCase().indexOf('https://www.instagram.com') === 0) classString = 'fab fa-instagram';
  }
  return <a href={url} target="_blank" rel="noreferrer" className="level-item has-text-primary">
             <i className={classString}></i>
           </a>;
};

export function postIsLive(post){ 
  let status = false;
  if(post) status = post.status === 'published' && moment().diff(getMoment(post.published_unix_ts)) > 0; 
  return status;
}

export function markup(content) {
  return {__html: content};
} 

export function getPostJSONUrl(config, post){
  return `${config.POST_URL}${post.filepath}`;
}

//return all attachments which are attachments but haven't already been inlined
export function getDownloadableContent(postJSON) {
  return postJSON && postJSON.attachments && postJSON.attachments.length > 0 ?
    postJSON.attachments.filter(a => a.contentDisposition === 'attachment' && !a.wasInlined) : 
    undefined;
}

//return the first attachment which has either the `isFeaturedImage` or `wasInlined` flag set
export function getFeaturedContent(postJSON) {
  return postJSON && postJSON.attachments && postJSON.attachments.length > 0 ?
    postJSON.attachments.find(a => a.isFeaturedImage || a.wasInlined) : undefined;
}

export function getPostUrlFragment (constants, post){
  return `${getPostPrefixFromConstants(constants)}/${getPostIdFromPost(post)}/${flattenPostTitle(post.post_title)}`;
}
