import React from 'react'
import ComicSummary from './ComicSummary'

const ComicList = ({ comics }) => {
    return (
        <div className="jumbotron">
            <div className="row">
                {comics && comics.map(comic => {
                    return (
                        <ComicSummary comic={comic} key={comic.id}/>
                    )
                })}
            </div>
        </div>

    )
}

export default ComicList