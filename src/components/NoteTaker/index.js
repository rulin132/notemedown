import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import shortid from 'shortid';
const NoteTaker = (props) => {
    const [clicked, setClicked] = useState(false);
    const textareaChange = () => {
        if (!clicked) {
            setClicked(true);
            props.history.push(`/` + shortid.generate());
        }
    };

    return (
        <div className="NoteTaker">
            <div className="row">
                <div className="col s12">
                    <div className="alert alert-warning" role="alert">Warning! This app is in development, saving is coming really soon...</div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <textarea
                        onKeyDown={textareaChange}
                        className="form-control"
                        rows="20"
                        placeholder="This is where you enter your message, retaining will come later"
                    ></textarea>
                </div>
            </div>
            <div className="row text-right">
                <div className="col s12">
                    <button className="btn btn-primary btn-lg mt-2" type="button">
                        Save
                        </button>
                </div>
            </div>
        </div>
    );
}
NoteTaker.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default withRouter(NoteTaker);
