import React from 'react'
import ComicSummary from './ComicSummary'
import { Link } from 'react-router-dom'

const ComicList = ({ comics }) => {
    return (
        <div className="jumbotron">
            <div className="row">
                {comics && comics.map(comic => {
                    return (
                        <div className="col-md-4">
                            <Link to={'/comic/' + comic.id} key={comic.id} className='link'>
                                <ComicSummary comic={comic} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default ComicList