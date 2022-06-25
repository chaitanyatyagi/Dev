import React from 'react'
import "../style/comment.css"

function Comment(props) {
    const { account, comment } = props;
  return (
    <div className='commentsection'>
        <div className="account">{account}</div>
        <div className="comment">{comment}</div>
    </div>
  )
}

export default Comment