import React from 'react'

const Card = ( {post, toRemove, Id} ) => {
    
    const remove = (q, Id) =>{
        toRemove(q, --Id);
    }

    return (
        <div className="card">
            <img className="img" alt={post.title} title={post.title} src={post.url}></img>
            <div><h1>{post.title}</h1>
            <button onClick={(e) => {remove(post, Id)}}><i className="fa fa-times-circle"></i></button></div>
        </div>
    )
}

export default Card
