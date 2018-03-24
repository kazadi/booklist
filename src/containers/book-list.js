import React, { Component } from "react";
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned will show up
    //as props inside of BookList
    return {
        books: state.books
    };
}

//Anything returned from this function will become more props
// on the BookList container
function mapDispatchToProps(dispatch) {
    //when selectBook is called, the result should be passed
    //to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promotes BookList from a componet to a container - connects BookList
// with appropriate props
export default connect(mapStateToProps, mapDispatchToProps)(BookList)