import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVPresenter = ({ loading, popular, airingToday, airingThisWeek }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {airingToday ? (
                <Section title="Airing Today">
                    {airingToday
                        .filter(tv => tv.poster_path !== null)
                        .map(tv => (
                            <MovieItem
                                voteAvg={tv.vote_average}
                                posterPhoto={tv.poster_path}
                                id={tv.id}
                                title={tv.name}
                                key={tv.id}
                            />
                        ))}
                </Section>
            ) : null}
            {airingThisWeek ? (
                <Section title="Airing This Week">
                    {airingThisWeek
                        .filter(tv => tv.poster_path !== null)
                        .map(tv => (
                            <MovieItem
                                key={tv.id}
                                id={tv.id}
                                title={tv.name}
                                voteAvg={tv.vote_average}
                                posterPhoto={tv.poster_path}
                            />
                        ))}
                </Section>
            ) : null}
            {popular ? (
                <Section title="Popular">
                    {popular
                        .filter(tv => tv.poster_path !== null)
                        .map(tv => (
                            <MovieItem
                                key={tv.id}
                                id={tv.id}
                                title={tv.name}
                                voteAvg={tv.vote_average}
                                posterPhoto={tv.poster_path}
                            />
                        ))}
                </Section>
            ) : null}
        </Container>
    );


TVPresenter.propTypes = {
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    airingThisWeek: PropTypes.array,
    loading: PropTypes.bool.isRequired
};

export default TVPresenter;