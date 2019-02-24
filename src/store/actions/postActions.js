export const createPost = (post) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore()
    firestore.collection('posts').add({
    	...post, 
    	author: 'admin',
    	authorId: '5779',
    	createdAt: new Date()
    }).then(() => {
    	dispatch({ type: 'CREATE_POST', post });
    }).catch((err) => {
    	dispatch({type: 'CREATE_POST_ERROR', err});
    })
  } 
}

