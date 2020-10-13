import '../style.scss';
import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: '',
    };
  }

  changeName = (event) => {
    this.setState({ name: event.target.value });
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  changeMessage = (event) => {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div className="contact" id="contact">
        <h1>CONTACT</h1>
        <hr />
        <form id="contact-form" method="post" onSubmit="return validateForm()" action="https://formspree.io/caroline.22@dartmouth.edu">
          <div className="form-group">
            <input onChange={this.changeName} value={this.state.name} placeholder="name" />
          </div>
          <div className="form-group">
            <input onChange={this.changeEmail} value={this.state.email} placeholder="email" />
          </div>
          <div className="form-group">
            <textarea id="message" onChange={this.changeMessage} value={this.state.message} placeholder="message" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
