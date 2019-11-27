import React, {Component} from 'react';
import TVPresenter from "./TVPresenter";
import {movies, tv} from "../../src/api";


class TvContainer extends Component {
    state = {
        loading: true,
        error: null,
        popular: null,
        topRated: null,
        airingToday: null
    };

    async componentDidMount() {
        try {
            const topRated = await movies.getUpcoming();
            const popular = await movies.getPopular();
            const airingToday = await movies.getNowPlaying();

            this.setState({ topRated, popular, airingToday });

        } catch {
            this.setState({ error: "Can't get TV Show" });
        } finally {
            this.setState({ loading: false });
        }




    }

    render() {
        const { loading, error, popular } = this.state;
        return <TVPresenter loading={loading} />;
    }
}

export default TvContainer;