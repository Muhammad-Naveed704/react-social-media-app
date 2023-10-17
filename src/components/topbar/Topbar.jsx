import "./topbar.css"
// import React from "react"
import { Chat, Person, Search} from "@mui/icons-material"
export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo" > Facebook</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="searchIcon" />
                <input placeholder="Search for Friend Post vedio" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem"><Person/>
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem"><Chat/>
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
            <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="" alt="" />
         <img src="" alt="" />
          <img src="/assets/profile pic/pp1.jpg" alt="" className="topbarImg" />
        </div>

    </div>
  )
}
