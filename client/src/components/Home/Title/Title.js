import React, { memo } from 'react'
import { Link } from 'react-router-dom'


export const Title = memo(({children}) => {
    console.log('Title')
    return (
        <div>
            <Link to="/home" style={{cursor: "pointer"}}><h1>{children}</h1></Link>
        </div>
    )
})
