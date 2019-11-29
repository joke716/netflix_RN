import React, { Component } from 'react';
import SearchPresenter from "./SearchPresenter";


class SearchContainer extends Component {
    state = {
        loading: false,
        moviesResults: null,
        tvResults: null,
        searchTerm: ""
    };

    handleSearchUpdate = text => {
        this.setState({
            searchTerm : text
        })
    };

    onSubmitEditing = () => {
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            alert("Searching");
            return;
        }
    };



    render() {
        const {loading, moviesResults, tvResults, searchTerm} = this.state;
        return (
            <SearchPresenter
                moviesResults={moviesResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                onSubmitEditing={this.onSubmitEditing}
                handleSearchUpdate={this.handleSearchUpdate}
            />
        );
    }
}

export default SearchContainer;