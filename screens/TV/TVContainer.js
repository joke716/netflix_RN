import React, {Component} from 'react';
import TVPresenter from "./TVPresenter";
import {movies, tv} from "../../src/api";


class TvContainer extends Component {
    state = {
        loading: true,
        popular: null,
        airingThisWeek: null,
        airingToday: null,
        error: null
    };

    async componentDidMount() {
        try {

            ({ data: { results: popular }} = await tv.getPopular());
            ({ data: { results: airingToday }} = await tv.getAiringToday());
            ({ data: { results: airingThisWeek }} = await tv.getAiringThisWeek());

            this.setState({
                popular,
                airingToday,
                airingThisWeek
            });

        } catch {
            this.setState({ error : "Can't get TV Show" });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading, airingThisWeek, popular, airingToday, error } = this.state;
        return (
            <TVPresenter
                airingToday={airingToday}
                popular={popular}
                airingThisWeek={airingThisWeek}
                loading={loading}
                error={error}
            />
        );
    }
}

export default TvContainer;