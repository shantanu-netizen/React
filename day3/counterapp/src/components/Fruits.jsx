import React from 'react'

export default function Fruits({list}) {
  return (
    <div>
          <div>
              <ol>
                  {list.map((ele) => (
                      <li>{ele}</li>
                  ))}
              </ol>
          </div>
    </div>
  )
}
