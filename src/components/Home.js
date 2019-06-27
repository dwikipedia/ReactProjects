import React, { Component } from 'react'
import ComicList from './comics/ComicList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'

class Home extends Component {
    render() {
        //console.log(this.props)
        const { comics, auth } = this.props
        if(!auth.uid) return <Redirect to="/login"/>
        return (
            <div>
                <div className="container">
                    <ComicList comics={comics} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        comics: state.firestore.ordered.comics,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'comics' }
    ])
)(Home)