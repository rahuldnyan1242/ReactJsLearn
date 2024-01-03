import React, { Component } from 'react'
// import loading from '././public/Spinner-3.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={"Spinner-3.gif"} alt="loading" />
      </div>
    )
  }
}
