import React from 'react'
import PostSummary from './PostSummary'
import { Link } from 'react-router-dom'

const Post = ({posts}) => {
  return (
    <div className="feed-css section">
      { posts && posts.map(post => {
        return (
          <Link key={post.id} to={'/post/' + post.id}>
            <PostSummary post={post} />
          </Link>
        )
      })}
    </div>
  )
}

export default Post