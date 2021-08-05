import React from 'react';
import './Comments.css';


/* Support for blog comments will be added here at some point
 */
const Comments = (props) => {
    function Comment (props) {
        return (
            <div className="comment flex">
                <div className="userIcon flex justify-center align-center">
                    <h3 className="flex justify-center align-center"> <span>{props.name.substring(0,1)}</span> </h3>
                </div>
                <div className="commentData">
                    <h4>{props.name}</h4>
                    <p>Amet proident pariatur nulla exercitation nulla deserunt mollit consectetur officia est aliquip laborum sint voluptate.</p>
                </div>
                <div className="commentAction">
                    <div className="commentTime">
                        <p>(3 hours ago)</p>
                    </div>
                    <button>
                        <i className="fas fa-reply"></i> 
                        Reply
                    </button>
                </div>
            </div>
        )
    }

  return (
    <div className="commentsContainer">
        <div className="commentsHeader">
            <h2> <i className="fas fa-comments"></i> Comments</h2>
        </div>
        <div className="comments">
            <Comment name="Mike Nolan" />
            <Comment name="John Doe" />
            <Comment name="Rose Bush" />
        </div>
    </div>
  )
}

export default Comments;