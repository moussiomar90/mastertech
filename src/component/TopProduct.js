import React from 'react'
import { Link } from 'react-router-dom'


export default function TopProduct(Props) {
  return (
    <div>
         <div className="child"><Link to={`/product/${Props.id}`}><img src="./image/i.jpg"></img></Link>
                        </div>
    </div>
  )
}
