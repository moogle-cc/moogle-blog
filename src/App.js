import React , {useEffect , useState} from 'react';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Footer from './components/Footer';
import axios from 'axios';
import config from './config';
import {getPostIdFromPost, updateCssVariables, getPostIdFromRouteParam} from './utils';

//You get this component when you visit your-domain.com/postId/postTitle
function App(props) {
  //metadata about a single post from /post?domain=<>&id=<>
  const [postMeta, setPostMeta] = useState(undefined);
  const [constants, setConstants] = useState(undefined);
  useEffect(() => { 
    axios(config.POSTS_URL).then((res) => {
      res.data.sort((a,b) => a.published_unix_ts > b.published_unix_ts ? -1 : 1);
      let postId = getPostIdFromRouteParam(props.match.params.id);
      setPostMeta(res.data.find(x => getPostIdFromPost(x) === postId));
    });
    axios(config.CONSTANTS_URL).then(res => {
      setConstants(res.data)
      updateCssVariables(res.data, document.documentElement);
    });
  },[props.match.params.id]);
  return (
    <>
      <Navbar blogTitle={constants && constants.TITLE ? constants.TITLE : 'The Blog'} config={config} constants={constants}/>
      <Post postMeta={postMeta}/>
      <br/>
      <Footer config={config} constants={constants}/>
    </>
  );
}

export default App;
