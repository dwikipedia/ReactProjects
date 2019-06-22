import React, { Component } from 'react'
import ComicList from './comics/ComicList'
import {connect} from 'react-redux'

class Home extends Component {
    render() {
        //console.log(this.props)
        const {comics} = this.props
        return (
            <div>
                <div className="container">
                    <ComicList comics={comics} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        comics: state.comic.comics
    }
}

export default connect(mapStateToProps)(Home)