import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div class="row">
          <div class="col-6">
            <h1>I am {resumeData.name}</h1>
            <h3>
              I am a {resumeData.role}.{resumeData.roleDesc}
            </h3>
            <hr />
            <ul>
              {resumeData.socials &&
                resumeData.socials.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url}>
                        <i class={item.class}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
