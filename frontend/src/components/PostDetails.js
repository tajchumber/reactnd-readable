import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CommentsList from './CommentsList'

import { loadPost, loadComments } from '../actions'

import * as API from '../utils/api'
import { readableDate } from '../utils/helpers'

class PostDetails extends Component {
  componentDidMount() {
    const postId = this.props.match !== undefined ? (
      this.props.match.params.postId || false
    ) : false

    this.props.fetchPost(postId)
    this.props.fetchComments(postId)
  }

  render() {
    const { post } = this.props
    const { comments } = this.props
    const postComments = comments[post.id] || []

    return (
      <div>
        <div className='jumbotron category-list'>
          {post && (
            <div>
              <h4 className="card-title">{post.title}</h4>
              <h6 className="card-subtitle text-muted">
                {post.voteScore} points by {post.author} | {readableDate(post.timestamp)}
              </h6>
              <p className="card-text">
                {post.body}
              </p>
              <Link to={`/category/${post.category}`} className="card-link">{post.category}</Link>
            </div>
          )}
        </div>
        <CommentsList comments={postComments} />
        <Link to="/">Go back home</Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: (postId) => (
      API
        .fetchPost(postId)
        .then(post => dispatch(loadPost(post)))
    ),
    fetchComments: (postId) => (
      API
        .fetchComments(postId)
        .then(comments => dispatch(loadComments(postId, comments)))
    )
  }
}

const mapStateToProps = ({ post, comments }) => ({
  post: post.post ? post.post : post,
  comments
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)