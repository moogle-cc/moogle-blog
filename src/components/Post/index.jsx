import React, {useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config';
import {postIsLive, markup, getDownloadableContent} from '../../utils';

const Post = ({postMeta}) => {
  const [attachments, setAttachments] = useState(undefined);
  const [postDownloadStatus, setPostDownloadStatus] = useState('not-started');
  const [postContent, setPostContent] = useState(undefined);
  useEffect(() => {
    if(postMeta){
      setPostDownloadStatus('started');
      axios.get(`${config.POST_URL}${postMeta.filepath}`)
      .then((response) => {
        setPostContent(response.data);
        setAttachments(getDownloadableContent(response.data));
        setPostDownloadStatus('completed');
      })
      .catch(e => setPostDownloadStatus('failed'));
    }
  }, [postMeta]);

  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-three-fifths mx-4">
        <p className="is-family-secondary is-size-4 has-text-left"> { postMeta ? (postIsLive(postMeta) ? postMeta.subject : 'Post not found!') : (postDownloadStatus === 'failed' ? 'Post Not Found': 'Loading...') }</p>
        <div className="dlc">
          <h6>{attachments && attachments.length > 0 && postIsLive(postMeta) ? "Downloads:" : ""}</h6>
          <ul>
          {
            attachments && attachments.length && postIsLive(postMeta)> 0 ?
            attachments.map((attachment, idx) => {
              if(!attachment.wasInlined){
                return(
                <li  style={{'cursor': 'pointer'}} key={`attachment-idx-`+idx} id={`attachment-idx-`+idx} className='block inline'>
                  <a href={`${attachment.contentLocation}`} target="_blank" rel="noreferrer" download>{attachment.filename}</a>
                </li>)
              }
              return undefined;
            })
            : null
          }
          </ul>
          {attachments && attachments.length > 0 ? <br/>:"" }
        </div>
        <div className="blog content" dangerouslySetInnerHTML={markup(postContent && postContent.html && postIsLive(postMeta) ? postContent.html : '<a href="/">Back</a>')}>
        </div>
        {/* <Comments /> */}
        <br />
      </div>
      <div className="column"></div>
    </div>
  )
}

export default Post;
