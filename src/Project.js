import React, { Component } from "react";
import "./App.css";
class Project extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div class="media-left" />
              <div className="media-content">
                <p className="title is-4">
                  {this.props.title}{" "}
                  <a href={this.props.link}>{this.props.link}</a>
                </p>
                <p className="subtitle is-6">
                  {this.props.subtitle}
                </p>
              </div>
            </div>
            <div className="card-image">
              <figure className="image">
                <img src={this.props.img} alt="" />
              </figure>
            </div>
            <div className="content">
              <h3>Why I built it</h3>
              <p>
                {this.props.why}
              </p>
              <h3>Description</h3>
              <p>
                {this.props.description}
              </p>
              <h3>Technologies</h3>
              <p>
                {this.props.technologies}
              </p>
              <h3>What I learned</h3>
              <p>
                {this.props.takeaways}
              </p>
              <h3>Status</h3>
              <p>
                {this.props.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
