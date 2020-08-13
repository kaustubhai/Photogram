import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Card = ( {post, toRemove, Id} ) => {
    
    const remove = (q, Id) =>{
        toRemove(q, --Id);
    }

    return (
        <div data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-out" data-aos-duration="500" data-aos-once="true" className="card">
            <img className="img" alt={post.title} title={post.title} src={post.url}></img>
            <div><h1>{post.title}</h1>
            <button onClick={(e) => {remove(post, Id)}}><i className="fa fa-times-circle"></i></button></div>
        </div>
    )
}

export default Card
