import React from 'react'

export default function Contact(props) {
    //Programatic redirect
    setTimeout(()=>{
        props.history.push("/")
    }, 2000) 
    
    return (
        <div>
        Welcome to Contact !
        </div>
    )
}
