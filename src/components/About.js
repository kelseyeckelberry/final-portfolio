import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div class="row">
          <div class="col-6">
            <img class="profile-pic" src="../public/images/IMG_0334_sm.png" />
          </div>
          <div class="col-6">
            <h2>ABOUT ME</h2>
            <p>{resumeData.about}</p>
          </div>
          <h2>CONTACT DETAILS</h2>
          <p class="address">
            <span>{resumeData.name}</span>
            <br></br>
            <span>{resumeData.city}</span>
            <br></br>
            <span>{resumeData.email}</span>
          </p>
        </div>
      </section>
    );
  }
}
