import React, { Component } from 'react';
// import { useState } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  //   handleChangeName = e => {
  //     // console.log(e.currentTarget.value);
  //     this.setState({ name: e.currentTarget.value });
  //   };

  //   handleChangeNumber = e => {
  //     // console.log(e.currentTarget.value);
  //     this.setState({ number: e.currentTarget.value });
  //   };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  // this.setState({ [name] : e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.props.onSubmit(this.state);

    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input
          value={this.state.name}
          type="text"
          name="name"
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          value={this.state.number}
          type="tel"
          name="number"
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
