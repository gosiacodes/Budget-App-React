import React, { Fragment } from "react";

export default class Withdraw extends React.Component {
  lastWithdraw = 0;
  withdrawName = "";
  budgetInfo = this.props.budgetInfo;
  expences = this.props.expences;

  handleInputDataNum = (e) => {
    e.preventDefault();
    this.lastWithdraw = e.target.value;
  };

  handleInputDataText = (e) => {
    e.preventDefault();
    this.withdrawName = e.target.value;
  };

  checkBalance = () => {
    if (this.budgetInfo.balance < this.lastWithdraw) {
      alert("You don't have enough money!");
    } else if (this.lastWithdraw <= 0) {
      alert("Enter a withdraw value grater or equal to 1");
    } else {
      this.checkName();
    }
  };

  checkName = () => {
    if (this.withdrawName === "") {
      alert("Enter a withdraw name");
    } else {
      let check = false;
      this.expences.map((value) => {
        return value.name === this.withdrawName ? (check = true) : "";
      });
      if (check) {
        alert(`Item "${this.withdrawName}" already exists!`);
      } else {
        this.submitAmountWithdraw();
      }
    }
  };

  submitAmountWithdraw = () => {
    const newBudgetInfo = {
      lastDeposit: this.budgetInfo.lastDeposit,
      lastWithdraw: this.lastWithdraw,
      budget: this.budgetInfo.budget,
      withdrawn:
        parseInt(this.budgetInfo.withdrawn) + parseInt(this.lastWithdraw),
      balance: parseInt(this.budgetInfo.balance) - parseInt(this.lastWithdraw),
    };
    localStorage.setItem("budgetInfo", JSON.stringify(newBudgetInfo));
    const expence = {
      name: this.withdrawName,
      price: this.lastWithdraw,
    };
    this.expences.push(expence);
    localStorage.setItem("expences", JSON.stringify(this.expences));
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
            placeholder="Withdraw amount"
            onChange={this.handleInputDataNum}
          />
          <input
            type="text"
            required
            placeholder="Withdraw name"
            onChange={this.handleInputDataText}
          />
          <button className="button-red" onClick={() => this.checkBalance()}>
            Withdraw
          </button>
        </form>
      </Fragment>
    );
  }
}
