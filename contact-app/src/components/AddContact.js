import React from "react";

class AddContact extends React.Component {
    render() {
        return(
            <div className="ui main center" style={{marginTop: "5em"}}>
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" className="Name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" className="Email" placeholder="example.com" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;