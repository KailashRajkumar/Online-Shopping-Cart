import React, { useState } from 'react';

const Contact = () => {
  // Implementing form status state
  const [formStatus, setFormStatus] = useState('Send');

  // Handling form submission
  const onSubmit = (e) => {
    e.preventDefault();

    // Update form status to form submission
    setFormStatus('Submitting...');

    // Accessing form field values
    const { name, email, message } = e.target.elements;

    // Creating contact form data object
    let contactForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    console.log(contactForm);
  };

  return (
    <div className="mx-auto col-10 col-md-8 col-lg-6">
      <h2 className="mb-3 text-center">Contact Us!!!</h2>
      <form className="" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default Contact;
