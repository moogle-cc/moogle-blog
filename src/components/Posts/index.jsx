import React from 'react';
import {Link} from 'react-router-dom';
import {convertTime, postIsLive, getSocialFragment, getFeaturedContent, getPostUrlFragment} from '../../utils';

const Posts = ({postId , posts, HOST, config, constants}) => {
  let getFeaturedImage = (post) => {
    let attachment = getFeaturedContent(post);
    return attachment && attachment.contentLocation ? attachment.contentLocation : config.BLANK_FEATURED_IMAGE;
  };
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-three-fifths">
        <article class="media mt-4 pt-4 mx-2">
          <figure class="media-left">
            <p class="image is-96x96">
              <img class="is-rounded" src="/profile.png" alt="author" loading="lazy"/>
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong className="is-size-4 has-text-dark is-family-secondary">{constants && constants.TITLE ? constants.TITLE : ''}</strong> 
                <br/>
                <span>{constants && constants.FOOTER ? constants.FOOTER.substring(0, config.MAX_FOOTER_LENGTH) : ''} </span>
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                  { constants && constants.TWITTER_URL ? getSocialFragment(constants.TWITTER_URL) : '' }
                  { constants && constants.INSTAGRAM_URL ? getSocialFragment(constants.INSTAGRAM_URL) : '' }
                  { constants && constants.FACEBOOK_URL ? getSocialFragment(constants.FACEBOOK_URL) : '' }
              </div>
            </nav>
          </div>
          <div class="media-right"> </div>
        </article>
        <hr/>
        <br/>
        <div>
          <ul>
          {
              posts ?
                posts.map((post, index) => {
                  if(postIsLive(post)) {
                    return(
                      <Link className="has-text-dark" to={constants ? `${getPostUrlFragment(constants, post)}` : `${getPostUrlFragment(undefined, post)}`}>
                        <li className="my-6 mx-3" id={postId} key={index + 1}> 
                          <article class="media">
                            <figure class="media-left">
                              <p class="image is-96x96">
                                <img src={post.attachments ? getFeaturedImage(post) : config.BLANK_FEATURED_IMAGE} alt=""/>
                              </p>
                            </figure>
                            <div class="media-content">
                              <div class="content">
                                <div className="flex">
                                  <h4 className="postTitle is-family-secondary is-size-5 is-marginless" style={{width: '78%'}}>{post.post_title}</h4>
                                  <span className="postDate" style={{width: '22%'}}>{convertTime(post.published_unix_ts)}</span>
                                </div>
                                <br/>
                                <p className="is-size-6"> {post.post_excerpt.substring(0,100)}... </p>
                                <small class="has-text-primary"> Read More... </small>
                              </div>
                              <nav class="level is-hidden">
                                <div class="level-left">
                                  <a class="level-item" href="#a">
                                    <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                  </a>
                                  <a class="level-item" href="#a">
                                    <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                                  </a>
                                  <a class="level-item" href="#a">
                                    <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                  </a>
                                </div>
                              </nav>
                            </div>
                            <div class="media-right"></div>
                          </article>
                          
                        </li>
                      </Link>
                    )
                  }
                  return null;
                }) :
                <p> Loading.... </p>
          }
          </ul>
        </div>
      </div>
      <div className="column"></div>
    </div>
  )
}

export default Posts;
