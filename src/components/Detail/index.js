import React, {Component, PropTypes} from 'react';

// user defined
import './index.css';
import {getSearchResultRequest} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import { browserHistory } from 'react-router'
class Content extends Component {
    constructor(props) {
        // when the constroctor is initialized call top seller
        super(props);
        this.state = { data: this.props.searchQuote.data }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.searchQuote.data })
    }
    createItem(data) {
        console.error("4", data);
        let res = [];
        for (let key in data) {
            // console.error('data[key]["Image"]',data[key]["Image"]);
            // console.error('data[key]["Image"]2',data[key]["Image"]["MediumImage"]);
            if (data[key]["Image"] && data[key]["Image"]["LargeImage"])
            res.push(
            <div className='item'>
                <img src={data[key]["Image"]["LargeImage"]["URL"]}/>
            </div>);
        }  
        return res;
    }
    render() {

        return (
                <div className="app-content">

                    detail
                </div>
        )
    }
}

function mapStateToProps(state) {
    return state; 
} 
Content.propTypes = {

  dispatch: PropTypes.func.isRequired
}
function mapDispatchToProps(dispatch) {
  // alert(dispatch);
  return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)