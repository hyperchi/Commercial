import React, {Component, PropTypes} from 'react';

// user defined
import './index.css';
import {getSearchResultRequest} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import ss from './index.css';
class Content extends Component {
    constructor(props) {
        // when the constroctor is initialized call top seller
        super(props);
        this.state = { 
            data: this.props.searchQuote.data,
            index: this.props.params.index
        }
        // console.error("4", this.props.params.index);
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.searchQuote.data })
    }
    createThumbnail(data) {
        let index = this.state.index;
        return  (<div className='item'>
                    <img src={data[index]["Image"]["LargeImage"]["URL"]}/>
                </div>);
    }
    createAuthors(data, index) {
        let res = [];
        // alert(data[index]["ItemAttributes"]["Author"]);
        if (Array.isArray(data[index]["ItemAttributes"]["Author"])) {
            for (let key in data[index]["ItemAttributes"]["Author"]) {
                let content = <a href="">{data[index]["ItemAttributes"]["Author"][key]}</a>;
                if (key != data[index]["ItemAttributes"]["Author"].length - 1) 
                    res.push(
                        <span className='author-box'>{content}(Author),</span>
                    );
                else
                    res.push(
                        <span className='author-box'>{content}(Author)</span>
                    );
            }
        } else {
            res.push(
                <span className='author-box'><a href="">{data[index]["ItemAttributes"]["Author"]}</a>(Author)</span>
            )            
        }    
        return res;
    }
    createDetail(data) {
        let index = this.state.index;
        return  (<div className='content'>
                    <h3>{data[index]["ItemAttributes"]["Title"]}</h3>
                    <div className="author-continer">
                        By{this.createAuthors(data, index)}
                    </div>
                </div>);
    }
    render() {

        return (
                <div className="detail-box">

                    <div className='fraction'>

                        {this.state.data.Item ? this.createThumbnail(this.state.data.Item) : ''}
                    </div>

                        {this.state.data.Item ? this.createDetail(this.state.data.Item) : ''}
                    <div className='fraction'>order place holder</div>
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