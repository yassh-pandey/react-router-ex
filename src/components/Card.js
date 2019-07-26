import React from 'react'
import {Link} from 'react-router-dom'
import './../styles/Card.css'
export default function Card({data}) {
    const renderData = data.map((data_item)=>{
        return (
        <Link to={`/posts/${data_item.id}`} key={data_item.id}>
            <div className="Card">
                <div className="Card-title"><h3>{data_item.title}</h3></div>
                <div className="Card-body">{data_item.body}</div>
            </div>
        </Link>
        )
    })
    return (
        <div className="Card-wrapper">
            {renderData}
        </div>
    )
}
