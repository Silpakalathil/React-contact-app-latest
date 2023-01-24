import React from "react";
import {Link , useLocation} from "react-router-dom";
import user1 from '../images/user1.png';

const ContactDetail = (props) => {
    const location = useLocation()
    console.log(location)
    const state = location.state
    console.log(state);
    console.log(props);
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user1} alt='user'></img>
                </div>
                <div className="content">
                    <div className="header">{state.contact.name}</div>
                    <div className="description">{state.contact.email}</div>
                </div>
                <Link to='/'>
                    <button className="ui button blue centered"> Back To Contact List</button>
                </Link>
            </div>

        </div>
    )
}

export default ContactDetail;