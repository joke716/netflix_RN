import React from "react";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { GREY_COLOR } from "../constants/Colors";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: ${props => (!props.big ? "15px" : "17px")};
  margin-vertical: 5px;
`;

const HContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

const Column = styled.View`
  margin-left: 20px;
  width: 60%;
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 14px;
  margin-vertical: 7px;
`;

const MovieItem = ({
    id,
    posterPhoto,
    title,
    voteAvg,
    horizontal = false,
    overview,
    isMovie = true,
    navigation
}) => (
    <TouchableWithoutFeedback
        onPress={() =>
            navigation.navigate({ routeName: "Detail", params: { isMovie, id } })
        }
    >
        { horizontal ? (
            <HContainer>
                <MoviePoster path={posterPhoto} />
                <Column>
                    <Title big={true}>{title}</Title>
                    <MovieRating votes={voteAvg} />
                    {overview ? (
                        <Overview>
                            {overview.length > 150
                                ? `${overview.substring(0, 160)}...`
                                : overview}
                        </Overview>
                    ) : null}
                </Column>
            </HContainer>
        ) : (
            <Container>
                <MoviePoster path={posterPhoto} />
                <Title>
                    {title.length > 15 ? `${title.substring(0, 12)}...` : title}
                </Title>
                <MovieRating votes={voteAvg} />
            </Container>
        )}
    </TouchableWithoutFeedback>
);

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string,
    isMovie: PropTypes.bool
};

export default withNavigation(MovieItem);