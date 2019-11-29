import React, { Component } from 'react';
import SearchPresenter from "./SearchPresenter";
import { movies, tv } from "../../src/api";


class SearchContainer extends Component {
    state = {
        loading: false,
        moviesResults: null,
        tvResults: null,
        searchTerm: "",
        error: null
    };

    handleSearchUpdate = text => {
        this.setState({
            searchTerm : text
        })
    };

    onSubmitEditing = async () => {
        const { searchTerm } = this.state;
        let moviesResults, tvResults, error;
        this.setState({ loading : true });
        try {
            ({ data: { results: moviesResults }} = await movies.searchMovies(searchTerm));
            ({ data: { results: tvResults }} = await tv.searchTv(searchTerm));
            this.setState({ tvResults, moviesResults });
        } catch {
            this.setState({ error: "Can't search" })
        } finally {
            this.setState({ loading : false })
        }
        return;
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