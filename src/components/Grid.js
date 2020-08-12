import React from 'react'
import Card from './Card'
import Add from './Add'

const Grid = ( {posts, toRemove} ) => {
    return (
            <div className="container">
                <Add/>
                {posts.map((post, index) => <Card toRemove={toRemove} index={index} post={post} /> )}
            </div>
    )
}

export default Grid
