import React, {Component, PropTypes} from 'react'
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/match'
// user defined
import logo from '../../assets/logo.svg';
import './index.css'
import { getSearchResultRequest, incrementAsync } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
const languages = [
    {
        first: 'Charlie',
        last: 'Brown',
        twitter: 'dancounsell'
    },
    {
        first: 'Charlotte',
        last: 'White',
        twitter: 'mtnmissy'
    },
    {
        first: 'Chloe',
        last: 'Jones',
        twitter: 'ladylexy'
    },
    {
        first: 'Cooper',
        last: 'King',
        twitter: 'steveodom'
    }
];
 const getSuggestions = value => {
   const inputValue = value.trim().toLowerCase();
   const inputLength = inputValue.length;

   return inputLength === 0 ? [] : languages.filter(lang =>
     lang.first.toLowerCase().slice(0, inputLength) === inputValue
   );
 };

 // When suggestion is clicked, Autosuggest needs to populate the input element
 // based on the clicked suggestion. Teach Autosuggest how to calculate the
 // input value for every given suggestion.
 const getSuggestionValue = suggestion => suggestion.first;

 // Use your imagination to render suggestions.
 const renderSuggestion = (suggestion, {query}) => {
    //  alert(query);
     return (
      <div className="suggest_box">
        {suggestion.first}
      </div>
    );     

 };

class SearchBar extends Component {
    //初始化渲染后触发
    componentDidMount() {
        // console.log('执行componentDidMount');


    }    
   constructor() {
     super();

     // Autosuggest is a controlled component.
     // This means that you need to provide an input value
     // and an onChange handler that updates this value (see below).
     // Suggestions also need to be provided to the Autosuggest,
     // and they are initially empty because the Autosuggest is closed.
     this.state = {
       value: '',
       suggestions: []
     };
   }
   componentWillReceiveProps(nextProps) {
        console.log('执行componentWillReceiveProps',nextProps);
        // if (nextProps.selectedReddit !== this.props.selectedReddit) {
        // const { dispatch, selectedReddit } = nextProps
        // dispatch(fetchPostsIfNeeded(selectedReddit))
        // }
   }
   onChange = (event, { newValue }) => {
     this.setState({
       value: newValue
     });
   };

   // Autosuggest will call this function every time you need to update suggestions.
   // You already implemented this logic above, so just use it.
   onSuggestionsFetchRequested = ({ value }) => {
     this.setState({
       suggestions: getSuggestions(value)
     });
   };

   // Autosuggest will call this function every time you need to clear suggestions.
   onSuggestionsClearRequested = () => {
     this.setState({
       suggestions: []
     });
   };
    onSearch = () => {
      console.error(this.props);
        let searchWords = this.state.value;
        this.props.getSearchResultRequest(searchWords);
    };
   render() {
     const { value, suggestions } = this.state;

     // Autosuggest will pass through all these props to the input element.
     const inputProps = {
       placeholder: 'Search brands and stores...',
       value,
       onChange: this.onChange
     };

      const {searchQuote} = this.props;
     // Finally, render it!
     return (
       <div className="react-autosuggest__container">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
            <div className="search-bar-submit" onClick={this.onSearch}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
      );

    }
 }

function mapStateToProps(state) {
//     console.error("aa", state);
// //   const { selectedReddit, postsByReddit } = state
// //   console.error(postsByReddit);
// //   const {
// //     isFetching,
// //     lastUpdated,
// //     items: posts
// //   } = postsByReddit[selectedReddit] || {
// //     isFetching: true,
// //     items: []
// //   }
// //   console.error(isFetching);
// //   console.error(lastUpdated);
// //   console.error(posts);

// //   return {
// //     selectedReddit,
// //     posts,
// //     isFetching,
// //     lastUpdated
// //   }
    return state; 
} 
SearchBar.propTypes = {

  dispatch: PropTypes.func.isRequired
}
function mapDispatchToProps(dispatch) {
  // alert(dispatch);
  return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)