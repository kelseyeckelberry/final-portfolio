import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div class="row">
          <div class="col-6">
            <p>Feel free to contact me!</p>
          </div>
          <div class="row">
            <div class="col-6">
              <ul class="socials">
                {resumeData.socials &&
                  resumeData.socials.map((item) => {
                    return (
                      <li>
                        <a href={item.url}>
                          <i class={item.class} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
