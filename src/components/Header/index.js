import React, {Component, PropTypes} from 'react'
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/match'
// user defined
import logo from '../../assets/logo.svg';
import './index.css'
import {getSearchResultRequest} from '../../actions'
import SearchBar from '../SearchBar'
export default class Header extends Component {
    render() {
        const { actions } = this.props;
        return (

            <div className="app-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <div className="container">
                    <h2>Amazon Discounts</h2>
                    <div className="btn">place-holder</div>
                    <div className="btn">place-holder</div>
                    <SearchBar actions={actions}></SearchBar>
                </div>
            </div>)
    }

}

