import React from 'react'
// conditional rendering <1>
/*
export default function Conditional({ login }) {
    if (login) {
        return <div>Welcome to page</div>
       } else {
       return <div>Please login first</div>
    }
}
    */
// conditional rendering <2>
export default function Conditional({login}) {
    return (
        <>
            {!login&&<p>Please login first</p>}
        </>
    )
}
