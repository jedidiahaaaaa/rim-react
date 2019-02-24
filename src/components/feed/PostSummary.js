import React from 'react'

const PostSummary = ({post}) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  console.log(post.createdAt.seconds)
  const date = new Date(post.createdAt.seconds* 1000)
  const month = months[date.getMonth()]
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const createdAt = day + " " + month + ", " + hours + ":" + minutes
  
  return (
    <div className="card z-depth-0 post-css">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{post.title}</span>
          <p>{post.content}</p>
          <p className="grey-text right">{createdAt}</p>
        </div>
      </div>
  )
}

export default PostSummary