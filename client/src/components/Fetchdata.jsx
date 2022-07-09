import React, { Component } from 'react'

export default class Fetchdata extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',value2:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    // console.log(event.target.value);
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "username": this.state.value } )
  };
  fetch('/getdata', requestOptions)
  .then(res => res.json())
  .then((ans) => { 
    alert(ans.message)
  this.setState({value2:ans.content});
  });
  // console.log( this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <div>
         <div>
        <h1 className='my-4' style={{fontSize:"40px",fontFamily:"Pinyon Script"}}>keyword into text</h1>
    <div className="mb-3 container" style={{paddingLeft:"8%",paddingRight:"8%"}} >
  <label htmlFor="exampleFormControlInput1" className="form-label">Search keyword</label>
  <div className='row'>
 <div className='col-sm-8'>
  <input type="email" className="form-control  mx-2 my-1" id="exampleFormControlInput1" placeholder="example : vishal789456" onChange={this.handleChange} value={this.state.value} />
  </div>
  <div className='col-sm-2'> 
  <button type="button" className="btn btn-outline-warning my-1" onClick={this.handleSubmit}>
    <img src='https://img.icons8.com/arcade/344/experimental-search-arcade.png' alt='search' height={"30px"} width={"30px"}/>
  </button>
  </div>
  </div>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Content</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" value={this.state.value2}></textarea>
</div>
      </div>
      </div>
    )
  }
}
