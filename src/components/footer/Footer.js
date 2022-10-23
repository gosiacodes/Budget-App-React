import React, { Fragment } from "react";

export default class Footer extends React.Component {
  footer() {
    return (
      <footer className="footer">
        <h4>Copyright © 2022 | Malgorzata Pick</h4>
        <a
          href="https://www.linkedin.com/in/malgorzatapick/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/margareta75"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="https://malgorzatapick.eu/" target="_blank" rel="noreferrer">
          Portfolio
        </a>
      </footer>
    );
  }

  render() {
    return <Fragment>{this.footer()}</Fragment>;
  }
}
