export const LOAD_POSTS = 'LOAD_POSTS'
export const RE_LOAD_POST = 'RE_LOAD_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'

export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
})

export const reLoadPost = post => ({
  type: RE_LOAD_POST,
  post
})

export const addPost = post => ({
  type: ADD_POST,
  post
})

export const deletePost = post => ({
  type: DELETE_POST,
  post
})
