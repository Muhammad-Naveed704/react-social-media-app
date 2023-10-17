import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="ProfileCoverImg"
                src="assets/coverpic.jpg"
                alt=""
              />
              <img className="ProfileUserImg" src="assets/profile pic/pp1.jpg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Aamir khan </h4>
                <span className="profileInfoDesc">hello every one </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
