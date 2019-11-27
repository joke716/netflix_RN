import React, {Component} from 'react';
import TVPresenter from "./TVPresenter";
import {movies, tv} from "../../src/api";


class TvContainer extends Component {
    state = {
        loading: true,
        error: null,
        popular: null,
        topRated: null,
        airingThisWeek: null
    };

    async componentDidMount() {
        try {

            ({ data: { results: topRated }} = await tv.getTopRated());
            ({ data: { results: popular }} = await tv.getPopular());
            ({ data: { results: airingToday }} = await tv.getAiringThisWeek());

            this.setState({
                topRated,
                popular,
                airingThisWeek
            });

        } catch {
            this.setState({ error : "Can't get TV Show" });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading, error, topRated, popular, airingToday } = this.state;
        return <TVPresenter loading={loading} />;
    }
}

export default TvContainer;