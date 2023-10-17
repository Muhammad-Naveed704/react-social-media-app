import "./sidebar.css"
import React from "react"
import { RssFeed, School, WorkOutline,Event, HelpOutline, Bookmark, Group, PlayCircleFilledOutlined, Chat } from "@mui/icons-material"
import {Users} from "../../dummyData"
import CloseFriend from "../closedfriend/CloseFriend"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed  className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat  className="sidebarIcon"/>
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined  className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group  className="sidebarIcon"/>
            s<span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark  className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline  className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline  className="sidebarIcon"/>
            <span className="sidebarListItemText">Job</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <School  className="sidebarIcon"/>
            <span className="sidebarListItemText">courses</span>
          </li>
        </ul>
        <button className="sidebarButton">See More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
        {Users.map(u=>(<CloseFriend key={u.id} user={u} />) )}             
        </ul>
      </div>
      </div>
  )
}
