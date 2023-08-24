import React, {useEffect, useState} from "react";

import {contactList, checkboxFieldsName} from "../../constants/contacts";
import {useNavigate} from "react-router-dom";

import "./contacts.css";

function Contacts() {
    const navigate = useNavigate();
    const [checkboxesState, setCheckboxesState] = useState({
        male: true,
        female: true
    })
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        let result = [...contactList.filter(({gender}) => !gender)];

        Object.entries(checkboxesState).map(([key, value]) => {
            if (value) {
                contactList.map((el, index) => el.gender === key && result.splice(index, 0, el))
            }
        });

        if (search.length) {
            result = result.filter(({firstName, lastName, phone}) => {
                return `${firstName.toLowerCase()}${lastName.toLowerCase()}${phone.toLowerCase()}`.includes(search.toLowerCase());
            })
        }

        setData(result);
    }, [checkboxesState, search])

    const changeCheckboxField = ({target: {checked}}, checkboxName) => {
        setCheckboxesState({...checkboxesState, [checkboxName]: checked})
    }

    return (
        <div className="contacts">
            <div className="list">
                <div className="container">
                    <h1 className="pb-3">Contacts</h1>
                    <div>
                        {Object.entries(checkboxesState).map(([key, value]) => (
                            <div className="form-check form-switch" key={key}>
                                <input
                                    onChange={(e) => changeCheckboxField(e, key)}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckChecked"
                                    checked={value}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexSwitchCheckChecked"
                                >
                                    {checkboxFieldsName[key]}
                                </label>
                            </div>
                        ))
                        }
                    </div>
                    <form className="pt-3 nosubmit">
                        <input
                            className="nosubmit"
                            type="search"
                            placeholder="Search..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>
                <div>
                    {data.length > 0 ? (
                        data.map((contact, index) => (
                            <div key={index} onClick={() => navigate(`/contact/${contact.id}`)}>
                                <p>
                                    {contact.firstName} {contact.lastName}
                                </p>
                                {index < data.length - 1 && <hr/>}
                            </div>
                        ))
                    ) : (
                        <div>
                            <p className="nosubmit">Немає збігів для </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Contacts;
