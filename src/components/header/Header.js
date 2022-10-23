import React, { Fragment } from "react";

export default class Header extends React.Component {
  header() {
    return (
      <header className="header">
        <img src="./images/Grit-Academy-logo.png" alt="Grit Academy Logo" />
      </header>
    );
  }

  render() {
    return <Fragment>{this.header()}</Fragment>;
  }
}
