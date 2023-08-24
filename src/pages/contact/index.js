import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {contactList} from "../../constants/contacts";
import { useNavigate } from "react-router-dom";

import './styles.css';

const Contact = () => {
    let params = useParams();
    const navigate = useNavigate();
    const [contactData, setContactData] = useState(null);

    useEffect(() => {
        setContactData(contactList.find(({id}) => id === params.id));
    }, []);

    return (
        <div className="contact">
            <div className="container">
                <h2 className="pb-3 pt-3">
                    {contactData?.firstName} {contactData?.lastName}
                </h2>
                <p>phone: {contactData?.phone}</p>
                <p>gender: {contactData?.gender}</p>
                <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => navigate(-1)}
                >
                    назад
                </button>
            </div>
        </div>
    );
};

export default Contact;