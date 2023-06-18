import React from "react";
import "./ebill.css";

class Ebill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      data: [
        { title: "consumed units", value: 0 },
        { title: "total current charges rs", value: 0 },
        { title: "current charges rs ", value: 0 },
        { title: "fixed cost rs ", value: 0 },
        { title: "subsidy fixed cost rs ", value: 0 },
        { title: "new subsidy rs", value: 0 },
        { title: "net amount rs", value: 0 },
      ],
    };
    this.handlevalue = this.handlevalue.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handlevalue(e) {
    this.setState({ first: e.target.value });
  }

  calculate(e) {
    let amount = 0;
    let unitvalue = Number(this.state.first);
    if (unitvalue < 100) amount = 0;
    else if (unitvalue > 100) amount += (unitvalue - 100) * 3.75 + 100;
    else if (unitvalue > 200) amount += (unitvalue - 100) * 4 + 250;
    else if (unitvalue > 400) amount += (unitvalue - 100) * 4.25 + 300;
    else if (unitvalue < 600) amount += (unitvalue - 100) * 5 + 400;
    else amount += unitvalue * 5 + 400;

    this.setState({
      data: [
        { title: "consumed units", value: unitvalue },
        { title: "total current charges rs", value: amount },
        { title: "current charges rs ", value: amount },
        { title: "fixed cost rs ", value: 0 },
        { title: "subsidy fixed cost rs ", value: 0 },
        { title: "new subsidy rs", value: 250 },
        { title: "net amount rs", value: amount - 250 },
      ],
    });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handlevalue}
          value={this.state.first}
          placeholder="units"
        />
        <button onClick={this.calculate}>submit</button>
        <div>
          <table border={1}>
            <tbody>
              {this.state.data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.title}</td>
                    <td>{val.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Ebill;
