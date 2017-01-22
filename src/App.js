import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { getSearchResultRequest, incrementAsync } from './actions'
import { bindActionCreators } from 'redux'
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import * as Actions from './actions'

class App extends Component {
    constructor(props) {
        console.error(props);
        super(props);
        this.render = this.render.bind(this);

        this.state = {
            items: this.props.items,
            disabled: true
        };
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
        // if (nextProps.selectedReddit !== this.props.selectedReddit) {
        // const { dispatch, selectedReddit } = nextProps
        // dispatch(fetchPostsIfNeeded(selectedReddit))
        // }
    }

    render() {
        const {searchQuote, incrementAsync} = this.props;

        // alert(this.props.dispatch);
        return (
        <div className="">
            <Header actions={Actions}></Header>
            {/*<Content></Content>*/}
            <div className="search-bar-submit"
                onClick={incrementAsync}>
                asd{searchQuote.data}
            </div>
            {searchQuote.data}
        </div>
        );
    }
}

function mapStateToProps(state) {
  console.error("aa", state);
//   const { selectedReddit, postsByReddit } = state
//   console.error(postsByReddit);
//   const {
//     isFetching,
//     lastUpdated,
//     items: posts
//   } = postsByReddit[selectedReddit] || {
//     isFetching: true,
//     items: []
//   }
//   console.error(isFetching);
//   console.error(lastUpdated);
//   console.error(posts);

//   return {
//     selectedReddit,
//     posts,
//     isFetching,
//     lastUpdated
//   }
    return state; 
}
App.propTypes = {

  dispatch: PropTypes.func.isRequired
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

