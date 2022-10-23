import React, { Fragment } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Deposit from "./components/deposit/Deposit";
import Withdraw from "./components/withdraw/Withdraw";
import Budget from "./components/budget/Budget";

export default class App extends React.Component {
  getExpences = localStorage.getItem("expences");
  expences = this.getExpences ? JSON.parse(this.getExpences) : [];
  getBudgetInfo = localStorage.getItem("budgetInfo");
  budgetInfo = JSON.parse(this.getBudgetInfo);

  setBudget = () => {
    this.budgetInfo = {
      lastDeposit: 0,
      lastWithdraw: 0,
      budget: 0,
      withdrawn: 0,
      balance: 0,
    };
    localStorage.setItem("budgetInfo", JSON.stringify(this.budgetInfo));
    localStorage.setItem("expences", []);
    window.location.reload();
  };

  render() {
    return (
      <Fragment>
        <Header></Header>
        <main>
          <h1>Budget App</h1>
          {!this.getBudgetInfo && !this.getExpences ? this.setBudget() : ""}
          <div className="row">
            <div className="column">
              <Deposit budgetInfo={this.budgetInfo}></Deposit>
              <Withdraw
                budgetInfo={this.budgetInfo}
                expences={this.expences}
              ></Withdraw>
            </div>
            <div className="column">
              <Budget
                budgetInfo={this.budgetInfo}
                expences={this.expences}
              ></Budget>
            </div>
          </div>
          <div className="row2">
            <button className="reset-button" onClick={this.setBudget}>
              RESET
            </button>
          </div>
        </main>
        <Footer></Footer>
      </Fragment>
    );
  }
}
