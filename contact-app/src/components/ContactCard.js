import React from "react";
import user from '../images/contact.png';

const ContactCard = (props) => {
    console.log("ContactCard", props);
    const {id, name, email} = props.contact;
    return(
        <div className="item" style={{display: "flex", gap: "10px"}}>
        <img src={user} alt="ContactCard" width="35" height="35" />
        <div className="content" style={{width: "500px"}}>
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <div style={{marginTop: "10px",cursor: "pointer", color: "red" }}>
            <i className="trash alternate outline icon"></i>
        </div>
        </div>
        );
};
export default ContactCard;