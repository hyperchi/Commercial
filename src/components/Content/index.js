import React, {Component, PropTypes} from 'react';

// user defined
import './index.css';
import {getSearchResultRequest} from '../../actions'

export default class Content extends Component {
    constructor() {
        // when the constroctor is initialized call top seller
        super();
        this.state = {

        };

    }
    render() {
        return (
                <div className="app-content">
                    <div className="btn">place-holder</div>
                    <div className="btn">place-holder</div>
                </div>)
            }
};