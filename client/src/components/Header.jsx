import React from 'react'

export default function Header() {
  return (
    <div className='row'>
        <h1 className='col' style={{fontSize:"50px",fontFamily:"Edu NSW ACT Foundation"}}>TempStore</h1>
        <a className="alert alert-secondary col-sm-1 " role="alert" href='/'>
        <img src='https://img.icons8.com/bubbles/344/home-page.png' width={"50px"} />    
        <h6>Home Page</h6>
          </a>
    </div>
  )
}
