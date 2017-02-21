import React, {Component, PropTypes} from 'react';

// user defined
import './index.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
// import { browserHistory } from 'react-router'
// import { push } from 'react-router-redux'

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
            if (data[key]["Image"] && data[key]["Image"]["LargeImage"])
                res.push(
                <div className='item' onClick={this.props.showDetail.bind(this, key)}>
                    <img src={data[key]["Image"]["LargeImage"]["URL"]}/>
                </div>);
        }  
        return res;
    }
    render() {
        // console.error("#",this.props.searchQuote);
        return (
                <div className="app-content">
                    {this.state.data.Item ? this.createItem(this.state.data.Item) : ''}
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
  return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)