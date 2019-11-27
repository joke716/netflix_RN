import React, { Component } from 'react';
import MoviesPresenter from "./MoviesPresenter";
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
            this.setState({ upcoming, popular, nowPlaying })
        } catch {
            this.setState({  error : "Can't get Movies" });

        } finally {
            this.setState({
                loading: false
            });
        }
    }


    render() {
        const { loading, error, upcoming, popular, nowPlaying } = this.state;
        return (
            <MoviesPresenter
                upcoming={upcoming}
                nowPlaying={nowPlaying}
                popular={popular}
                loading={loading}
                error={error}
            />
        );
    }
}

export default MoviesContainer;