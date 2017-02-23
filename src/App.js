import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { getSearchResultRequest, incrementAsync } from './actions'
import { bindActionCreators } from 'redux'
import Header from './components/Header'
import Async from './components/Async'
import * as Actions from './actions'
import './App.css';
import './styles/fonts.css';
import './styles/input.css';
import './styles/font-awesome/font-awesome.min.css';

class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            items: this.props.items,
            disabled: true
        };
        this.props.getSearchResultRequest("best seller");        
    }

    componentDidMount() {
        this.setState({
            disabled: false
        })
    }

    componentWillMount() {

    }

    //每次接受新的props触发
    componentWillReceiveProps(nextProps) {
        console.log('执行componentWillReceiveProps',nextProps);
    }

    render() {
        const {searchQuote, incrementAsync} = this.props;

        // alert(this.props.dispatch);
        return (
            <div className="">
                <Header actions={Actions}></Header>
                {/*<Content></Content>*/}
                <Async/>
                <div className="search-bar-submit"
                    onClick={incrementAsync}>

                </div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {

    return state; 
}
App.propTypes = {

}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

