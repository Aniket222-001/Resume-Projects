import React, { Component } from 'react'
//  for class initialization rcc



export default class spinner extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    {/* <span className="visually-hidden">Loading...</span> */}
  </div>
</div>
      </div>
    )
  }
}
