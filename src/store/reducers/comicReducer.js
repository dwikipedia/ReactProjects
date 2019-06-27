const initState = {
    comics: [
        { id: '1', title: 'The amazing Spiderman', author: 'Stan Lee', description: 'description' },
        { id: '2', title: 'The Incredible Hulk', author: 'Stan Lee', description: 'description' }
    ]
}

const comicReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_COMIC':
            console.log('nigga', action.comic)
            return state
        case 'ADD_COMIC_ERROR':
            console.log('failed to add comic', action.err)
            return state
        default:
            return state
    }
}

export default comicReducer