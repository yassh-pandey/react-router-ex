import React, {useEffect, useState, Fragment} from 'react'
import './../styles/Home.css'
import loading from './../icons/loading.svg'
import Card from './Card'
export default function Home() {
    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((fetchResult)=>{
                fetchResult.json()
                    .then((data)=>{
                        const postsForRender = data.slice(0,15);
                        setPosts([...posts, ...postsForRender])
                        setLoading(false)
                    })
            })
            .catch((err)=>{
                console.error(err)
            })
    },[]) 

    return (
        <Fragment>
            { isLoading ? (
                <div className="Home-loading-logo-wrapper">
                    <img className="Home-loading-logo-image" src={loading}/>
                </div>
            ) : (
                <div>
                    <header className="Home-title">Welcome to Home !</header>
                    <Card data={posts} />
                </div>
            )
        }
        </Fragment>
    )
}
