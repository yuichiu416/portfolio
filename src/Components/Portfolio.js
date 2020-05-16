import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(project => {
        var projectImage = 'images/portfolio/' + project.image;
        return <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
              <img alt={project.title} src={projectImage} />
              <div className="overlay">
                <ul className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <a href={project.demo} title={project.title} className="zindex1"><li>Demo</li></a>
                  <a href={project.repo} className="zindex1"><li><i className="fab fa-github">Github</i></li></a>
                  <p>{project.technology}</p>
                </ul>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            <div id="portfolio-wrapper" className="cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
