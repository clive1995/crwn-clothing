import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({id,price,name,imageUrl}) => (
        <div className="collection-item" key={id}>
            <div className="image" style={{ background: `url(${imageUrl})` }}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
)

export default CollectionItem;