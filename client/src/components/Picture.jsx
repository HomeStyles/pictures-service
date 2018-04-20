import React from 'react';
import Save from './Save.jsx';
import Share from './Share.jsx';
import Tour from './Tour.jsx';
import style from './styles/picture-share-save-tour.css';


var Picture = (props) => (
  <div className={style.container} >
    <span><img src={props.image.image.living_room} className={style.picture}/></span>
    <Save image={props.image}/>
    <Share image={props.image}/>
    <Tour image={props.image} handlepageviewclick={props.handlepageviewclick} tourview={props.tourview}/>   
  </div>
);

export default Picture;