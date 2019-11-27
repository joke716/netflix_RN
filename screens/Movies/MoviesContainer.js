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
            const upcoming = await movies.getUpcoming();
            const popular = await movies.getPopular();
            const nowPlaying = await movies.getNowPlaying();

            this.setState({ upcoming, popular, nowPlaying });

        } catch {
            this.setState({ error: "Can't get Movies" });
        } finally {
            this.setState({ loading: false });
        }
    }


    render() {
        const { loading } = this.state;
        return <MoviePresenter loading={loading} />;
    }
}

export default MoviesContainer;