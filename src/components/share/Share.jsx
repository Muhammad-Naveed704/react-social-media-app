import { EmojiEmotions, PermMedia, Label, Room } from "@mui/icons-material";
import "./share.css";

export default function hello() {
  return (
    <div className="share">
      <div className="shareWraper">
        <div className="shareTop">
            <img className="shareProfileImg" src="/assets/profile pic/pp2.jpg" alt="" />
            <input placeholder="whats on your mind" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Vedio</span>
                </div>
                <div className="shareOption">
                    <Label  htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room  htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Locatio</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions  htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Felings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
