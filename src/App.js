import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav is-dark has-shadow" id="top">
            <div className="container">
              <div className="nav-left">
                <h1 className="nav-item">Daniel Voce</h1>
              </div>
              <label className="nav-toggle" htmlFor="nav-toggle-state">
                <span />
                <span />
                <span />
              </label>
              <input type="checkbox" id="nav-toggle-state" />

              <div className="nav-right nav-menu is-hidden-tablet">
                <li className="nav-item is-tab is-active">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item is-tab">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="nav-item is-tab">
                  <Link to="/experience">Experience</Link>
                </li>
              </div>
            </div>
          </nav>

          <div className="columns">
            <aside className="column is-2 aside hero is-fullheight is-hidden-mobile">
              <div>
                <div className=" columns links has-text-centered">
                  <div className="column">
                    <a href="https://www.linkedin.com/profile/view?id=AAMAABwfvcIBHvwVqp3zwV9Er2z2h7zPr2MQ5l0&trk=hp-identity-name">
                      <span className="icon">
                        <i className="fa fa-fw fa-linkedin-square" />
                      </span>
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://github.com/davjr96">
                      <span className="icon">
                        <i className="fa fa-fw fa-github-square" />
                      </span>
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://bitbucket.org/davjr96/">
                      <span className="icon">
                        <i className="fa fa-fw fa-bitbucket-square" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="main">
                  <li className="item active">
                    <span className="icon">
                      <i className="fa fa-home" />
                    </span>
                    <span className="name">
                      <Link to="/">Home</Link>
                    </span>
                  </li>
                  <li className="item">
                    <span className="icon">
                      <i className="fa fa-code" />
                    </span>
                    <span className="name">
                      <Link to="/projects">Projects</Link>
                    </span>
                  </li>
                </div>
              </div>
            </aside>
            <div className="content column is-10">
              <Switch>
                <Route exact path="/" component={Home} />;
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
