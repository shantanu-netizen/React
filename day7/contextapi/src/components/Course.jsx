import React from 'react'
import { Link } from 'react-router-dom'
export default function Course() {
    return (
        <div>
            <h1>Find all your courses</h1>
            <Link to="/html">HTML</Link>
            <br />
            <Link to="/js">JavaScript</Link>
        </div>
    )
}
