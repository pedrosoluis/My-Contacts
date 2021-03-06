import React from 'react';
import { connect } from 'react-redux'
import Contact from './Contact'

function ContactsList({ dispatch, contacts }) {
    return (
        <div>
            <div className="d-flex">
                <label htmlFor="contactname" className="input-label">Name</label>
                <label htmlFor="contactname" className="input-label">Email</label>
            </div>
            {contacts.map(contact => (
                <Contact
                    key={contact.id}
                    id={contact.id} />
            ))}
        </div >
    );
}

const mapStateToProps = ({ contacts: { list: contacts } }) => {
    return {
        contacts
    }
};

export default connect(mapStateToProps)(ContactsList)