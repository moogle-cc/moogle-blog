import React , {useEffect , useState/*, useReducer*/} from 'react';
import Posts from './components/Posts';
import axios from 'axios';
import config from './config';
import {updateCssVariables, getPostJSONUrl} from './utils';

//You get this component when you visit your-domain.com 
function Home(props) {
  const [posts , setPosts] = useState(undefined);
  const [constants, setConstants] = useState(undefined);

  useEffect(() => {
    axios.get(config.POSTS_URL).then(res => {
      res.data.sort((a,b) => a.published_unix_ts > b.published_unix_ts ? -1 : 1);
      setPosts(res.data);
    });
    axios(config.CONSTANTS_URL).then(res => setConstants(res.data));
  }, []);

  useEffect(() => {
    let downloadPostDetails = async (posts) => {
      if(posts){
        let postDetailsCalls = [];
        posts.forEach(async post => {
          if(!post.attachments){
            let url = getPostJSONUrl(config, post);
            postDetailsCalls.push(axios.get(url).then((response2) => {
              post = {...post, "attachments": response2.data.attachments};
              return post;
            }));
          }
        });
        if(postDetailsCalls.length > 0) {
          await Promise.all(postDetailsCalls).then(vals => setPosts(vals));
        }
      }
    };
    downloadPostDetails(posts);
  }, [posts]);

  if(constants){
    updateCssVariables(constants, document.documentElement);
  }


  return (
    <>
      {posts ? 
      <div>
        <Posts postId={props.match.params.id} posts={posts} HOST={config.HOST} config={config} constants={constants}/>
        <div className="footer has-background-white">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-three-fifths content has-text-right">
              <hr/>
              <p className="tag">Powered by<a className="has-text-primary ml-1" href="https://moogle.cc" target="_blank" rel="noreferrer"> Moogle</a></p> 
            </div>
            <div className="column"></div>
          </div>
        </div>
      </div>
      :null}
    </>
  );
}

export default Home;
