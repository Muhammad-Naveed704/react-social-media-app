import "./rightbar.css";
import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/online";
// import Online from "../online/Online"
export default function Rightbar({ profile }) {
  const HomeRighBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/birthdayImg.jpg" alt="" />
          <span className="birthdayText">
            <b> Amir khan</b> and <b>3 others friend</b> have a birthday
          </span>
        </div>
        <img className="rightbarAd" src="assets/addPoster.jpg" alt="" />
        <h4 className="rightbarTitle">online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">karachi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"> From: </span>
            <span className="rightbarInfoValue">musharaf</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relation : </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
        
        <div className="rightbarFollowing">
        <img src="assets/profile pic/pp1.jpg"   className="rightbarFollowingImg" alt="" />
        <span className="rightbarFollowingName">Rashid gulbaz</span>
        </div>
        <div className="rightbarFollowing">
        <img src="assets/profile pic/pp2.jpg"   className="rightbarFollowingImg" alt="" />
        <span className="rightbarFollowingName">Rashid gulbaz</span>
        </div>
        <div className="rightbarFollowing">
        <img src="assets/profile pic/pp3.webp"   className="rightbarFollowingImg" alt="" />
        <span className="rightbarFollowingName">Rashid gulbaz</span>
        </div>
        <div className="rightbarFollowing">
        <img src="assets/profile pic/pp4.jpeg"   className="rightbarFollowingImg" alt="" />
        <span className="rightbarFollowingName">Rashid gulbaz</span>
        </div>
        <div className="rightbarFollowing">
        <img src="assets/profile pic/pp5.jpeg"   className="rightbarFollowingImg" alt="" />
        <span className="rightbarFollowingName">Rashid gulbaz</span>
        </div>
        <div className="rightbarFollowing">
        <img src="assets/profile pic/pp5.jpeg"   className="rightbarFollowingImg" alt="" />
        <span className="rightbarFollowingName">Rashid gulbaz</span>
        </div>
        
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRighBar/>}
      </div>
    </div>
  );
}
