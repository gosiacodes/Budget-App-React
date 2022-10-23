import React, { Fragment } from "react";

export default class Deposit extends React.Component {
  lastDeposit = 0;
  budgetInfo = this.props.budgetInfo;

  handleInputData = (e) => {
    e.preventDefault();
    this.lastDeposit = e.target.value;
  };

  submitAmountDeposit = () => {
    if (this.lastDeposit === "" || this.lastDeposit <= 0) {
      alert("Enter a deposit value grater or equal to 1");
    } else {
      const newBudgetInfo = {
        lastDeposit: this.lastDeposit,
        lastWithdraw: this.budgetInfo.lastWithdraw,
        budget: parseInt(this.budgetInfo.budget) + parseInt(this.lastDeposit),
        withdrawn: this.budgetInfo.withdrawn,
        balance: parseInt(this.budgetInfo.balance) + parseInt(this.lastDeposit),
      };
      localStorage.setItem("budgetInfo", JSON.stringify(newBudgetInfo));
    }
  };

  render() {
    return (
      <Fragment>
        <form className="column form">
          <input
            type="number"
            min="1"
            max="1000000000"
            required
            placeholder="Deposit amount"
            onChange={this.handleInputData}
          />
          <button
            className="button-green"
            onClick={() => this.submitAmountDeposit()}
          >
            Deposit
          </button>
        </form>
      </Fragment>
    );
  }
}
