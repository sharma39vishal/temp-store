import React, { Component } from 'react'

export default class Takedata extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',value2:''};
    this.handleChange2 = this.handleChange2.bind(this);    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    // console.log(event.target.value);
    this.setState({value: event.target.value});
  }
  handleChange2(event) {
    // console.log("fx2"+event.target.value);
    this.setState({value2: event.target.value});
  }
  handleSubmit(event) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "username": this.state.value2 ,"content":this.state.value} )
  };

  fetch('/adddata', requestOptions)
  .then(res => res.json())
  .then((ans) => { alert(ans.message)});
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div style={{paddingBottom:"8%"}}>
        <h1 className='my-4' style={{fontSize:"40px",fontFamily:"Pinyon Script"}}>Store Text into keyword</h1>
    <div className="mb-3" style={{paddingRight:"29%",paddingLeft:"29% "}}>
  <label htmlFor="exampleFormControlInput1" className="form-label">Unique Keyword</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" onChange={this.handleChange2} value={this.state.value2}  placeholder="example : vishal789456"/>
</div>
<div className="mb-3 mx-4">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Content</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" onChange={this.handleChange} value={this.state.value}  ></textarea>
</div>
<button type="submit"  value="Submit" onClick={this.handleSubmit} className="btn btn-outline-warning">Submit</button>   
      </div>
    )
  }
}
