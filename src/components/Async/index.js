import React, {Component, PropTypes} from 'react';

// user defined
import './index.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'


class Async extends Component {
    constructor(props) {
        // when the constroctor is initialized call top seller
        super(props);

    }
    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.searchQuote.data })
    }

    render() {
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

//   dispatch: PropTypes.func.isRequired
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)