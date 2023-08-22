import React from "react";
import avatar from "./img/elon.jpg";
import verified from "./img/Verified.jpg";
import contentImg from "./img/contentImg.jpg";
import "./Posts.css";

const person = {
  name: "Elon Musk",
  nickname: "@elonmusk",
  date: "jul 23",
  content: "OMG. So cool post i did!!!",
  contentImg: contentImg,
  avatar: avatar,
  isVerified: true,
};


export default function Post(props) {
  return (
    <div className="App">
      <div className="post">
        <div className="top">
          <div className="avatar-block">
            <img src={person.avatar} className="img" />
          </div>
          <div className="name">
            {person.name}
           {person.isVerified && <img src={verified} className="verified" />}
          </div>
          <div className="nickname">{person.nickname}</div>
          <div className="date">· {person.date}</div>
        </div>
        <div className="content">
          {props.content}
          <div className="contentImg">
            <img src={person.contentImg} className="contImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
