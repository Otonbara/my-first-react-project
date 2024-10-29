import React from 'react'
import { useState } from 'react'
import './new.css'

function New() {
    const [blogs] = useState([
        {title: 'JESUS IS KING', 
         body: 'Faith & Believe',
         author: 'Otonbara',
         id: 1},
        {title: 'PRIDE OF LONDON',
         body: '#KTBFFH', 
         author: 'Otonbara', 
         id: 2},
        {title: 'TRAVIS SCOTT', 
         body: 'JACKBOYS', 
         author: 'Otonbara', 
         id: 3}
    ])
  return (
    <div className='blog'>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>This was written by { blog.author }</p>
            </div>
        ))}
    </div>
  )
}

export default New
