const initState = {}

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POST': 
      console.log('Post Created:', action.post)
      return state;
    case 'CREATE_POST_ERROR':
      console.log('create post error', action.error)
      return state
    default:
      return state
  }
}

export default postReducer
