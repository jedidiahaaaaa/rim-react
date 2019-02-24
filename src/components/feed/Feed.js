import React, { Component } from 'react'
import Notifications from './Notifications'
import Post from '../feed/Post'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Feed extends Component {
  render() {
    const { posts } = this.props
    return (
      <div className="feed container">
        <div className="row">
          <div className="col s12 m8">
            <Post posts = {posts}/>
          </div>
          <div className="col s12 m3 offset-m1">
            <Notifications/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts
  }
}

export default compose(
  firestoreConnect([{collection:'posts'}]),
  connect(mapStateToProps)
)(Feed)
