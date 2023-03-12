import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container text-center p-2">
        <h1>Feel Free To Contact Us</h1>
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.427738964349!2d77.96556631485879!3d27.174289983015694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477ac735ca835%3A0xd87a077ed9b1f091!2s4A%2F470%2C%20Deoretha%2C%20Azam%20Para%2C%20Shahganj%2C%20Agra%2C%20Uttar%20Pradesh%20282010!5e0!3m2!1sen!2sin!4v1678510914369!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row p-3">
          <div className="offset-lg-3 col-lg-5 border border-dark">
            <form action="https://formspree.io/f/mdovdepz" method="POSt">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="user name"
                  id="exampleFormControlInput1"
                  placeholder="User Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                ></textarea>
              </div>
              <button className="btn btn-primary mb-2" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
