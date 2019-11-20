import React from "react";
import "./collections-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component"
const CollectionsPreview =({title,items})=>(

        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                { 
                    items
                    .filter((item,index)=> index < 4)
                    .map(({id,...otherItemProps})=>(
                        <CollectionItem key={id} {...otherItemProps}/>
                        
                    ))
                }
            </div>
        </div>

)
/* 
            { 
                data
                .filter((item,index)=> index > 4)
                .map((items)=>
                    <div key={items.id} className="preview">
                        <div>{items.name}</div>
                        <div>{items.imageUrl}</div>
                        <div>{items.price}</div>
                    </div>
                )
            }
<CollectionItem key={collection.id} {...otherItemProps} />

            { 
                data
                .filter((item,index)=> index > 4)
                .map((collection)=>
                    <div key={collection.id} className="preview">
                        <div>{collection.name}</div>
                        <div>{collection.imageUrl}</div>
                        <div>{collection.price}</div>
                    </div>
                )
            }

-------------------------------------------------------------------------
.map(({id,name,imageUrl,price})=>
                    <CollectionItem key={id} name={name} imageUrl={imageUrl} price={price} />
----------------------------------------------------------------------------------
                            collection.items.map(
                            (item)=>
                            <div className="preview">
                                <div>{item.name}</div>
                                <div>{item.image}</div>
                                <div>{item.price}</div>
                            </div>
                            )
*/
export default CollectionsPreview