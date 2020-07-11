import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom'
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
            <div class="row">
                <div class="col s12">
                    <div class="alert alert-warning" role="alert">Warning! This app is in development, saving is coming really soon...</div>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <textarea
                        onKeyDown={textareaChange}
                        class="form-control"
                        rows="20"
                        placeholder="This is where you enter your message, retaining will come later"
                    ></textarea>
                </div>
            </div>
            <div class="row text-right">
                <div class="col s12">
                    <button class="btn btn-primary btn-lg mt-2" type="button">
                        Save
                        </button>
                </div>
            </div>
        </div>
    );
}
NoteTaker.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    uriToken: PropTypes.string.isRequired
};

export default withRouter(NoteTaker);
