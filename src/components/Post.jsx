import React from 'react'
import {useState} from "react"
import Comment from './Comment'
import "../style/post.css"

function Post(props) {
    const [inputvalue,setInputvalue] = useState("")
    const [cmt,setCmt] = useState([])

    const {cmtn} = props

    const AddComment = () => {
        setCmt([...cmt,{
            id:cmt.length,
            val:inputvalue
        }])
        setInputvalue("")
    }
  return (
    <div className='post'>
        <div className="data">{cmtn}</div>
        {
            cmt.map(el => (
                <Comment key={el.id} comment={el.val} account = "ChaitanyaTyagi"/>
            ))
        }
        <div className="input">
            <input type="text" placeholder="Add a comment..." value={inputvalue} onChange = {e => setInputvalue(e.target.value)}/>
            <div className="btn" onClick = {AddComment}>COMMENT</div>
        </div>
        
    </div>
  )
}

export default Post