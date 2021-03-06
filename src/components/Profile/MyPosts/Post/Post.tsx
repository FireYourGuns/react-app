import React from 'react';
import styles from './Post.module.css';

type PropsType = {
    id: number
    message: string
    likesCount: number
    deletePost: (id:number)=>void
}

const Post: React.FC<PropsType> = ({id, message, likesCount, deletePost}) => {
  return (
      <div className={styles.item}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhnQMXK-T_-1xM_rBJHA2WEZwVB-TGVikpQ&usqp=CAU"
               alt="jw_logo"/>
          {message}
        </div>
        <div>
          likes = {likesCount}
        </div>
        <div>
          <button onClick={()=>deletePost(id)}>Delete post</button>
        </div>
      </div>
  )
}

export default Post;
