import React from "react";
import avatar from "../../assets/img/elon.jpg";
import verified from "../../assets/img/Verified.jpg";
import contentImg from "../../assets/img/contentImg.jpg";
import "../../pages/posts/posts.css";

const person = {
  name: "Elon Musk",
  nickname: "@elonmusk",
  date: "jul 23",
  content: "OMG. So cool post i did!!!",
  contentImg: contentImg,
  avatar: avatar,
  isVerified: true,
};


export default function Post({content}) {
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
          {content}
          <div className="contentImg">
            <img src={person.contentImg} className="contImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
