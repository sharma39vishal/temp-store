import React from 'react'

export default function Home() {
  return (
    <div className='row'>
        <h1 style={{fontSize:"50px",fontFamily:"Pinyon Script"}}>Now send Data without Login</h1>
        <a className='col mx-1 my-2' href='/putdata'>
        <div className="alert alert-warning" role="alert" >
        <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/344/external-content-ux-and-ui-flatart-icons-flat-flatarticons.png" />
        <h6 style={{fontSize:"40px",fontFamily:"Pinyon Script"}}>Text into Keyword</h6>
        </div>
        </a>
        <a className='col mx-1 my-2' href='/fetchdata'>
        <div className="alert alert-warning" role="alert" href='/fetchdata'>
        <img src="https://img.icons8.com/clouds/344/search-in-list.png" />
        <h6 style={{fontSize:"40px",fontFamily:"Pinyon Script"}}>keyword into text</h6>
        </div>
        </a>
    </div>
  )
}
