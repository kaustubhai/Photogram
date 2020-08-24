import React from 'react'
import Card from './Card'
import Add from './Add'

const Grid = ( {posts, toRemove, Id} ) => {
    return (
            <div className="container">
                <Add/>
                {posts.map((post, index) => <Card Id={Id} toRemove={toRemove} index={index} post={post.data} /> )}
            </div>
    )
}

export default Grid
