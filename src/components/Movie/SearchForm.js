import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../Redux/Actions/Search';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className=" search-form mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3 text-info">
           Afcah movies
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control fa fa-search"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />  
          <button type="submit" className="btn text-info btn-bg mb-4 fa fa-search form-control"> search </button>
          </form>
          <NavLink to="/home" activeStyle={{color:'turquoise'}}>
            <button type="submit" className="btn text-info btn-bg mb-4 fa"> Go To Home </button>
            </NavLink>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
