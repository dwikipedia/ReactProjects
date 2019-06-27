import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'

const ComicDetail = (props) => {
    const { comic, auth } = props
    if(!auth.uid) return <Redirect to="/login"/>
    if (comic) {
        return (
            <div className="container">
                <div className='jumbotron'>
                    <span className="card-text">{comic.title}</span>
                    <div className="text-muted mt-3">
                        <p>{comic.author}</p>
                        <p>{comic.description}</p>
                        {/* <p>{comic.createdDate.toString()}</p> */}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container text-center">
                <p>Loading Comics....</p>
            </div>
        )
    }
}

const mapStateToProps = (state, orgProps) => {
    // console.log(state)
    const id = orgProps.match.params.id
    const comics = state.firestore.data.comics
    const comic = comics ? comics[id] : null
    return {
        comic: comic,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'comics' }
    ])
)(ComicDetail)