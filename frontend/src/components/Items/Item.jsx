import React from "react";
import "../../assets/img/ice-cream-header.png";
import "../../assets/style.css";
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import IconSmallMenu from '../../assets/img/icon-small-menu.svg';
// import IconUser from '../../assets/img/user-icon.jpg';
// import { deletePost } from '../../reducks/posts/operations';

const Item = React.forwardRef((props, ref) => {
  const { item } = props;
  //     const dispatch = useDispatch();
  //     const [menuToggle, setMenuToggle] = useState(false);

  //     const deleteHandler = () => {
  //         dispatch(deletePost(post.id));
  //     };

  //     const settingHandler = () => {
  //         setMenuToggle(!menuToggle);
  //     };

  //     const getDate = date => {
  //         return new Date(date).toLocaleDateString('en-Us', {
  //             weekday: 'short',
  //             year: 'numeric',
  //             month: 'short',
  //             day: 'numeric',
  //             hour: '2-digit',
  //             minute: '2-digit'
  //         });
  //     };

  return (
    //         <li ref={ref}>
    //             <img className="menu_icon" onClick={settingHandler} src={IconSmallMenu} alt="setting" />
    //             {menuToggle && (
    //                 <div className="menu">
    //                     <span onClick={deleteHandler}>Delete</span>
    //                 </div>
    //             )}
    //             <div className="logo">
    //                 <img src={IconUser} alt="user-profile" />
    //             </div>
    <div className="image_name_outer">
      <div className="image_name">
        {item.image && (
          <a href={item.image} target="_blank" rel="noopener noreferrer">
            <img className="item-image" src={item.image} alt="thumbnail" />
          </a>
        )}
        <div className="price_button">
          <h4 className="name">{item.name}</h4>
          <p className="price">${item.price}</p>
        </div>
      </div>
      <div className="name_price">
        <button className="add-button">Add +</button>
      </div>
    </div>
    //         </li>
  );
});

export default Item;
