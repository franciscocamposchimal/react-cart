import React, { Component } from 'react';
import PropTypes from "prop-types";

class ResumeItem extends Component {
    render() {
        const { name } = this.props;

        return (
            <div>
                <h3>{ name }</h3>
            </div>
        );
    }
};

ResumeItem.propTypes = {
    name: PropTypes.string.isRequired
};
export default ResumeItem;