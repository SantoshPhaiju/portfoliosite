import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="section section-contact">
        <div className="container">
          <h2 className="common-heading">
            Contact Us
          </h2>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.096094471779!2d85.34049862909103!3d27.716544524607794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197d9d23f7ed%3A0x2724281b4393865d!2sChabahil%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1658041164064!5m2!1sen!2snp" width="600" height="450" style={{ border: "0px" }}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='chabahilmap'></iframe>
        </div>
        </div>
        <div className="section-contact-main contact-container">
          <form>
              <div className="grid grid-two-column">
                <div>
                  <label htmlFor="username"></label>
                  <input type="text" name='username' id='username' placeholder='Username' />
                </div>
                <div>
                  <label htmlFor="email"></label>
                  <input type="email" name='email' id='email' placeholder='Email' />
                </div>
              </div>

              <div>
                <label htmlFor="subject"></label>
                <input type="text" placeholder='Subject' name='subject' id='subject' />
              </div>
              <div>
                <label htmlFor="message"></label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
              </div>

              <div>
                <button className='btn'>Send Message</button>
              </div>
          </form>
        </div>

      </section>
    </>
  )
}

export default Contact
