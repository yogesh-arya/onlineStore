import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
const MenuItem=({imageUrl,title,size,linkUrl,history,match})=>(
    <div  className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{background:`url(${imageUrl})`}} />
                <div className="content">
                    <h1 className="title">{title} </h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
)

export default withRouter(MenuItem);