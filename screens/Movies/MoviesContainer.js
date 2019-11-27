import React, { Component } from 'react';
import MoviePresenter from "./MoviesPresenter";

class MoviesContainer extends Component {
    state = {
        loading: true
    };
    render() {
        const { loading } = this.state;
        return <MoviePresenter loading={loading} />;
    }
}

export default MoviesContainer;