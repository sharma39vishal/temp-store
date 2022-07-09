import React from 'react'

export default function Footer() {
  return (
    <div className='row justify-content-md-center my-4'>
        <h4>Contact Us :</h4>
        <div className="col col-sm-2">
            <a href="https://github.com/sharma39vishal/">
            <img src='https://img.icons8.com/clouds/344/github.png' width={"60px"} height={"60px"} alt='github' />
            </a>
    </div>
    <div className="col col-sm-2">
      <a href='https://www.linkedin.com/in/sharma39vishal'>
          <img src='https://img.icons8.com/nolan/344/linkedin.png' width={"60px"} height={"60px"} alt='LinkedIn' />
      </a>
    </div>
    <div className="col col-sm-2">
    <a href='mailto:sharma39vishal@gmail.com'>
         <img src='https://img.icons8.com/clouds/344/gmail-new.png' width={"60px"} height={"60px"} alt='Gmail'/>

    </a>
    </div>
    </div>
  )
}
