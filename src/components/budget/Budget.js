import React, { Fragment } from "react";

export default class Budget extends React.Component {
  getExpences = localStorage.getItem("expences");

  displayBudget = (budgetInfo) => {
    return budgetInfo ? (
      <div className="container">
        <div className="column budget-info">
          <h3>
            <span className="budget-title">Last deposit: </span>
            {budgetInfo.lastDeposit}
          </h3>{" "}
          <h3>
            <span className="budget-title">Last withdraw: </span>
            {budgetInfo.lastWithdraw}
          </h3>{" "}
          <h3>
            <span className="budget-title">Budget: </span>
            {budgetInfo.budget}
          </h3>{" "}
          <h3>
            <span className="budget-title">Withdrawn: </span>
            {budgetInfo.withdrawn}
          </h3>{" "}
          <h3>
            <span className="budget-title">Balance: </span>
            {budgetInfo.balance}
          </h3>
        </div>
      </div>
    ) : (
      " "
    );
  };

  displayExpences = (expences) => {
    return (
      <div className="expences-info">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          {expences.map((value, index) => {
            return (
              <thead key={index}>
                <tr>
                  <td>{value.name}</td>
                  <td>{value.price}</td>
                </tr>
              </thead>
            );
          })}
        </table>
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        <div className="row">
          {this.displayBudget(this.props.budgetInfo)}
          <ul className="container">
            {this.getExpences ? this.displayExpences(this.props.expences) : ""}
          </ul>
        </div>
      </Fragment>
    );
  }
}
