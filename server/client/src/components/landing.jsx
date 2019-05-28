import React, { Component } from "react";
import _ from "lodash";

class Landing extends Component {
  renderFeature() {
    const Feature = ({ icon, title, description }) => {
      return (
        <div className="feature">
          <i className={`fa fa-${icon}`} />
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      );
    };

    const featureList = [
      { icon: "comments", title: "Create unique campaigns", description: "Spread the word however you like and with whomever you like." },
      { icon: "bullhorn", title: "Reach your audience", description: "Know who you're talking so you can say the right things." },
      { icon: "tree", title: "Turn data into insights", description: "Identify actionable next steps from your data and optimise your efforts." }
    ];

    return _.map(featureList, ({ title, icon, description }) => {
      return <Feature key={title} icon={icon} title={title} description={description} />
    });
  };

  render() {
    return (
      <div className="landing">
        <div className="headline">
          <h1>Remove the pain<br />out of campaigning.</h1>
          <h3>Get started with the future of campaigning with a<br />smarter all-in-one marketing platform.</h3>
          <a href="/auth/google" className="btn">Sign Up</a>
        </div>
        <div className="detail">
          <h1>What you can do with<br />Campaign Manager</h1>
          <div className="features">
            {this.renderFeature()}
          </div>
        </div>
      </div>
    );
  };
};

export default Landing;
