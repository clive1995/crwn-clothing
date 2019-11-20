import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem =({title,imageUrl,linkUrl,size,history,match})=>{
    return(//"menu-item"
    <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)} >
        <div className="background-image" 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
    />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">buy now</span>
        </div>
    </div>
    );
}

export default withRouter(MenuItem);