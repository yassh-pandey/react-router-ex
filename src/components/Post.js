import React, {useState, useEffect, Fragment} from 'react'
import loading from './../icons/loading.svg'
import Card from './Card'

export default function Post(props) {
    const [post, setPost] = useState([]);
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        const post_id = props.match.url
        console.log(post_id)
        setLoading(true)
        const post_url = `https://jsonplaceholder.typicode.com${post_id}`
        fetch(post_url)
            .then((fetchRes)=>{
                fetchRes.json()
                    .then((postDataRes)=>{
                        const arr = []
                        arr.push(postDataRes)
                        setPost(...post, ...arr)
                        setLoading(false)
                    })
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return (
        <Fragment>
            {isLoading ? (
                <div className="Home-loading-logo-wrapper">
                    <img className="Home-loading-logo-image" src={loading}/>
                </div>
            ) : (
                <div className="Card" style={{"width": "60%", "marginTop": "80px"}}>
                <div className="Card-title"><h3>{post.title}</h3></div>
                <div className="Card-body">{post.body}</div>
            </div>
            )}
        </Fragment>
    )
}

