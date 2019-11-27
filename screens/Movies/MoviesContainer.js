import React, { Component } from 'react';
import MoviePresenter from "./MoviesPresenter";
import { movies } from "../../src/api";

class MoviesContainer extends Component {
    state = {
        loading: true,
        upcoming: null,
        popular: null,
        nowPlaying: null,
        error: null
    };

    async componentDidMount() {
        try {
            ({ data: { results: upcoming }} = await movies.getUpcoming());
            ({ data: { results: popular }} = await movies.getPopular());
            ({ data: { results: nowPlaying }} = await movies.getNowPlaying());
        } catch {
            error = "Can't get Movies";
        } finally {
            this.setState({
                loading: false,
                error,
                upcoming,
                popular,
                nowPlaying
            });
        }
    }


    render() {
        const { loading, error, upcoming, popular, nowPlaying } = this.state;
        return <MoviePresenter loading={loading} />;
    }
}

export default MoviesContainer;