import React from 'react'
import {Route} from 'react-router-dom'
import auth from './../auth.js'

export default function ProtectedRoute({component: Component, ...rest}) {
    // console.log(rest)
    // auth.login()
    return (
        <Route
            {...rest}
            render = {(props)=>(
                <div>
                    {console.log(props)}
                    {auth.isLoggedIn() ? <Component {...props}/> : 
                    <div>
                        You have to log in to see this
                    </div>
                    }
                </div>
            )}
        >
        </Route>
    )
}
