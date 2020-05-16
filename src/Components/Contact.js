import React, { Component } from 'react';

class Contact extends Component {
    render() {

        if (this.props.data) {
            // var name = this.props.data.name;
            // var street = this.props.data.address.street;
            // var city = this.props.data.address.city;
            // var state = this.props.data.address.state;
            // var zip = this.props.data.address.zip;
            // var phone = this.props.data.phone;
            // var email = this.props.data.email;
            var message = this.props.data.contactmessage;
        }

        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1> </h1>
                    </div>
                    <div className="ten columns">
                        <h2 className="lead">{message}</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="twelve columns">
                        {/* <form action="POST" id="contactForm" name="contactForm" data-netlify="true"> */}
                        <form action="https://formspree.io/myykpwqr" method="post" id="contactForm" name="contactForm" data-netlify="true">
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} required/>
                                </div>
                                <div>
                                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} required/>
                                </div>
                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                    <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" required></textarea>
                                </div>
                                <div className="flex">
                                    <button className="submit">Submit</button>
                                    <span id="image-loader">
                                        <img alt="" src="images/loader.gif" />
                                    </span>
                                </div>
                            </fieldset>
                        </form>

                        <div id="message-warning"> Error boy</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Contact;
