import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div class="row">
          <div class="col-6">
            <p>Feel free to contact me!</p>
          </div>
          <div class="row">
            <aside class="col-6">
              <div>
                <h4>LinkedIn: {resumeData.socials.name[0]}</h4>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }
}
