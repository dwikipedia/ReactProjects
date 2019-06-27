export const addComic = (comic) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('comics').add({
            ...comic,
            createdDate: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_COMIC', comic })
        }).catch((err) => {
            dispatch({ type: 'ADD_COMIC_ERROR', err })
        })
    }
}