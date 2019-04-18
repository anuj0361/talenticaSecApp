import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { withRouter } from "react-router-dom";

class VisitorInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      date: "",
      intime: "",
      idtype: "",
      idnumber: "",
      contact: "",
      selected: [],
      purpose: "",
      currentDate: "",
      currentTime: "",
      employeeList: ["abc", "def", "sdf", "axr"],
      success: false
    };
  }

  componentDidMount() {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    this.setState({ currentDate: currentDate, currentTime: currentTime });
  }

  onSubmit = e => {
    e.preventDefault();

    const visitorData = {
      fname: this.state.fname,
      lname: this.state.lname,
      date: this.state.currentDate,
      intime: this.state.currentTime,
      idtype: this.state.idtype,
      idnumber: this.state.idnumber,
      contact: this.state.contact,
      selected: this.state.selected[0],
      purpose: this.state.purpose
    };
    this.setState({ success: true });
    console.log(visitorData);

    window.setTimeout(() => {
      this.props.history.push("/");
    }, 1000);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCamerClick = e => {
    window.open("http://localhost:3000/capture",'Data','height=500,width=500')
  }

  renderForm = () => {
    return (
      <div className="card text-center">
        <div className="card-header">Please fill-in your details</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    name="currentDate"
                    value={this.state.currentDate}
                    id="date"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="intime">In Time</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    name="currentTime"
                    value={this.state.currentTime}
                    id="intime"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    name="fname"
                    value={this.state.fname}
                    onChange={this.onChange}
                    aria-describedby="emailHelp"
                    placeholder="Enter First Name"
                    required
                  />
                  <div className="invalid-feedback">hhvv</div>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    name="lname"
                    value={this.state.lname}
                    onChange={this.onChange}
                    aria-describedby="emailHelp"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="idtype">ID Type</label>
                  <select
                    className="form-control"
                    id="idtype"
                    name="idtype"
                    value={this.state.idtype}
                    onChange={this.onChange}
                    required
                  >
                    <option>--Select--</option>
                    <option>PAN Card</option>
                    <option>Driving License</option>
                    <option>Adhaar Card</option>
                    <option>VoterId</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="idnumber">ID Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="idnumber"
                    name="idnumber"
                    value={this.state.idnumber}
                    onChange={this.onChange}
                    aria-describedby="emailHelp"
                    placeholder="Enter ID number"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="contact">Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name="contact"
                    value={this.state.contact}
                    onChange={this.onChange}
                    aria-describedby="emailHelp"
                    placeholder="Enter Contact Number"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>To Meet</label>
                  <Typeahead
                    onChange={selected => {
                      this.setState({ selected });
                    }}
                    selected={this.state.selected}
                    id="meet"
                    options={this.state.employeeList}
                    placeholder="Enter Person Name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="purpose">Purpose</label>
                  <input
                    type="text"
                    className="form-control"
                    id="purpose"
                    name="purpose"
                    value={this.state.purpose}
                    onChange={this.onChange}
                    aria-describedby="emailHelp"
                    placeholder="Enter reason to visit"
                    required
                  />
                </div>
              </div>
            </div>
            <br />
            
            <a href="#" className="btn btn-info btn-lg" onClick={this.onCamerClick} >
              <span className="glyphicon glyphicon-camera"></span> Camera
            </a>
            <br />
            <button type="submit" className="btn btn-info btn-lg btn-block">
              Submit
            </button>
          </form>
        </div>
        {this.state.success ? (
          <div>
            <p
              style={{
                fontSize: "larger",
                fontFamily: "cursive",
                color: "green"
              }}
            >
              Success !!!
            </p>
          </div>
        ) : null}
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <br />
        <br />
        {this.renderForm()}
      </div>
    );
  }
}

export default withRouter(VisitorInfo);
