import React from "react";
import "./Style-dang.css";
import HinhDang from "./assetss/avatar.jpg";
import { Icon } from '@iconify/react';


export default function PostItem() {
  return (
    <div className="post__container">
      {/* Header -> Username + Avatar + Local */}
      <div className="post__headerdangbai">
      <div className="post__avatar">
        <img className="avatar-img" src={HinhDang} alt="p-1" />
        <div className="profile-name">Hồng Xuân</div>
      </div>  
      </div>
      
      <div className="post__groupdangbai">
        
        {/* input field for comment */}
        <div className="post__dangbai">
            <form> 
                <input type="text" placeholder="Nhập nội dung..." />
                
            </form>
            
            <button className="btn btn-post-comment">Đăng</button>
            
        </div>
          <div className="iconhinh">
            <Icon icon="icon-park-outline:add-picture" />
          </div>
       
        {/* image */}
        <div className="post__image">
              <span> 
                  <Icon  icon="ep:add-location" />
                  <Icon  icon="fluent:emoji-add-16-regular" />
                  <Icon  icon="fluent:folder-add-16-regular" />
              </span>
        </div>
      </div>
    </div>
  );
}