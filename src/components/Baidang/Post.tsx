import { faker } from '@faker-js/faker'
import React from 'react'
import './Style-post.css'
import HinhDang from "./assets/avatar.jpg";

export default function Post({ data, type }: any) {
  const fakeImg = faker.image.image()
  return (
    <div className="post__container">
      {/* image */}
      <div className="post__avatar">
        <img className="avatar-img" src={HinhDang} alt="p-1" />
        <div className="profile-name">Hồng Xuân</div>
          <p className="post__caption--time">
            <span>{Math.floor(Math.random() * 10) + 1}</span>
            {type ? ' Ngày trước' : ' Giờ trước' }
          </p>
      </div>
      
      <div className="post__group-bottom">
        {/* Username + Caption */}
        <div className="post__caption">
          <div className="post__caption--user">
            &nbsp;
            <span className="caption">{data.caption}</span>
          </div>
          {/* Time */}
          
        </div>
        {/* input field for comment */}
      </div>
      <div className="post__image">
        <img src={fakeImg} alt="p-1" />
      </div>
    </div>
  )
}
