import React, { Component } from "react";
import "./App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Bio</p>
          </header>
          <div className="card-content">
            <div className="content">
              <figure>
                <img
                  className=" image img-circle is-128x128"
                  src="profile.jpg"
                  alt=""
                />
              </figure>
              <p>
                Hi, My name is Danny and I am a Undergraduate Computer
                Engineering Student at the University of Virginia. I enjoy using
                both software and hardware to solve all sorts of real world
                problems and have used all sorts of technologies from Embedded C
                to ReactJS to Android Java. I always try to use the best tool
                for the job and will always try to keep up with the latest tools
                and technologies.
              </p>
              <p>
                At UVA I am a member of the
                <a href="http://www.seas.virginia.edu/acad/programs/tlp/">
                  {" "}Technology Leaders Program
                </a>. This program aims to bring engineers of all disciplines
                together in order to facilitate collaboration and play to
                everyone's strengths. It has given me a great experience in
                working with teams and developing my soft skills.
              </p>
              <p>
                In my free time I race competitively for{" "}
                <a href="http://www.vasst.org">
                  {" "}The Virginia Alpine Ski and Snowboard Team
                </a>. When I am not skiing I am a trip-leader for the{" "}
                <a href="http://www.outdoorsatuva.org/">
                  {" "}UVA Outdoors club
                </a>{" "}
                and organize many Mountain Biking trips.
              </p>
              <p>
                Check out my projects on the sidebar to see what I've been up
                to!
              </p>
            </div>
          </div>
          <footer className="card-footer" />
        </div>
      </div>
    );
  }
}

export default Home;
