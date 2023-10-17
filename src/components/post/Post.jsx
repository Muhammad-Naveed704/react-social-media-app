import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] =useState(post.like)
  const [isLiked, setISLiked] =useState(false)
  const likeHandler =()=>{
    setLike(isLiked ? like - 1 :like + 1)
    setISLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWraper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter( (u)=> u.id === post?.userId)[0]?.profilePicture}
              alt=""
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" onClick={likeHandler} src="/assets/like.png" alt="" />
            <img className="likeIcon" onClick={likeHandler} src="/assets/heart.png" alt="" />
            <span className="postCountCounter">{like} peopel like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommetText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
