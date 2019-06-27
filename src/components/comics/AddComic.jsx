import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComic } from '../../store/actions/comicActions'
import {Redirect} from 'react-router-dom'

class AddComic extends Component {
    state = {
        title: '',
        author: '',
        description: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addComic(this.state)
    }
    render() {
        const {auth} = this.props
        if(!auth.uid) return <Redirect to="/login"/>
        return (
            <div className="container">
                <div className="style-add-comic">
                    <h3 className='mt-4'>Add a New Comic!</h3>
                    <hr />
                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title" className="control-label col-sm-2">Comic Title</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="title" placeholder="Enter The title" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="author" className="control-label col-sm-2">Author</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="author" placeholder="Enter The Author's Name" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="descriptiton" className="control-label col-sm-2">Description</label>
                            <div className="col-sm-7">
                                <textarea className="form-control" rows="5" id="description" placeholder="Add description about this comic" onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button className="btn btn-success">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComic: (comic) => dispatch(addComic(comic))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComic)
