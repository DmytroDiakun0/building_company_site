import React from 'react';

import './ContactUs.css'

class ContactUs extends React.Component {

    constructor() {
        super();

        this.state = {
            name: '',
            number: '',
            text: '',
            alert: ''
        }


        this.buttonOnClick = this.buttonOnClick.bind(this);
        this.fieldOnChange = this.fieldOnChange.bind(this);
    }

    buttonOnClick(event) {
        this.setState({
            name: '',
            number: '',
            text: '',
            alert: 'Звернення успішно надіслано'
        });
    }

    fieldOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="contact-us">
                <div className="alert"><span>{this.state.alert}</span></div>
                <h1>Зв'яжіться з нами</h1>
                <form className="contact-form" action="mailto:dmytro.diakun-ip202@nung.edu.ua">
                    <div className="row">
                        <div className="name-field">
                            <label htmlFor="name">Ім'я</label>
                            <input type="text" value={this.state.name} name="name" id="name" onChange={this.fieldOnChange}/>
                        </div>
                        <div className="number-field">
                            <label htmlFor="number">Номер телефону</label>
                            <input type="text" value={this.state.number} name="number" id="number" onChange={this.fieldOnChange}/>
                        </div>
                    </div>
                    <div className="text-field">
                        <label htmlFor="text">Текст повідомлення</label>
                        <textarea value={this.state.text} name="text" id="text" onChange={this.fieldOnChange}/>
                    </div>
                    <div className="form-button">
                        <button onClick={this.buttonOnClick}>Надіслати</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactUs;