import React from 'react'

const Card = ( {post, toRemove} ) => {
    
    const remove = (q) =>{
        toRemove(q);
    }

    return (
        <div className="card">
            <img className="img" alt=" " src={post.url}></img>
            <div><h1>{post.title}</h1>
            <button onClick={(e) => {remove(post)}}><i className="fa fa-times-circle"></i></button></div>
        </div>
    )
}

export default Card
