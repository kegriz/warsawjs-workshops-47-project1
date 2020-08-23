import React, { Component } from "react";

class CalculatorContainer extends Component {
  // jeśli nie użyjemy f strzałkowej:
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  // }

  state = {
    amount: 0,
    base: "PLN",
    currency: "HKD",
    result: 0,
  };

  handleChange = (event) => {
    console.log("handleChange: ", event.target.name, ":", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    fetch(`https://api.ratesapi.io/api/latest?base=${this.state.base}`)
      .then((res) => res.json())
      .then((data) => this.setState({ result: data.rates[this.state.currency] * parseInt(this.state.amount) }));
  };

  render() {
    const { amount, base, currency, result } = this.state;

    return (
      <div className="CalculatorContainer">
        <h1>CalculatorContainer</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="amount" type="number" placeholder="Amount" value={amount} onChange={this.handleChange} />

          <select name="base" onChange={this.handleChange} value={base}>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
          </select>

          <select name="currency" onChange={this.handleChange} value={currency}>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
          </select>

          <input type="submit" value="Send" />
        </form>
        <div>Result: {result}</div>
      </div>
    );
  }
}

export default CalculatorContainer;
