import React, { Fragment, Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

import './FormContact.css';

class FormContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <div>
          <div className="container container_form" style={{ marginTop: 10 }}>
            <div className="row" role="row">
              <div className="col-lg-9 text-center" role="columnheader"></div>
            </div>
            <div className="row" role="row">
              <div className="col-lg-9" style={{ marginTop: 30 }}>
                <FormGroup controlId="formBasicName">
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Imię"
                    value={this.state.name}
                    className="text-primary"
                    required
                    data-validation-required-message="Podaj imię."
                    onChange={this.handleChange.bind(this, 'name')}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicSubject">
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Telefon"
                    className="text-primary"
                    value={this.state.phone}
                    onChange={this.handleChange.bind(this, 'phone')}
                    required
                    data-validation-required-message="Podaj numer telefonu."
                  />
                </FormGroup>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                  <FormGroup controlId="formBasicEmail">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={this.state.email}
                      className="text-primary"
                      onChange={this.handleChange.bind(this, 'email')}
                      required
                      data-validation-required-message="Podaj adres e-mail"
                    />
                  </FormGroup>

                  <FormGroup controlId="formBasicMessage">
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      placeholder="Treść wiadomości"
                      className="text-primary"
                      value={this.state.message}
                      required
                      data-validation-required-message="Treść wiadomości."
                      onChange={this.handleChange.bind(this, 'message')}
                    />
                  </FormGroup>
                  <div className="clearfix" />
                  <div className="col-lg-12 text-center">
                    <div id="success" />
                    <button
                      aria-label="Wyślij"
                      type="submit"
                      className="btn btn-lg btn-outline-secondary"
                      style={{ marginTop: 20, padding: '5px 15px' }}
                    >
                      Wyślij
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FormContact;
