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
        this.state = { loadingNumber: this.props.asyns.loadingNumber }

    }
    componentDidMount () {
       this.move();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ loadingNumber: nextProps.asyns.loadingNumber })
        this.move();
    }
    move(){
      let progressElement = this.refs.progress;
      if (!progressElement) return;
      let width = 2;
      let id = setInterval(frame, 50);
       function frame() {
           console.error(width);
         if (width >= 100) {
           clearInterval(id);
         } else {
           width++;
           progressElement.style.width = (width-2) + '%';
         }
       }
    }
    render() {
        let className = this.state.loadingNumber !== 0 ? "VZ_Loading" : "hide";
        return (
            <div className={className}>
                <div id="myProgress">
                    <div ref="progress" id="progressBar"></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state; 
} 
Async.propTypes = {

//   dispatch: PropTypes.func.isRequired
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Async)