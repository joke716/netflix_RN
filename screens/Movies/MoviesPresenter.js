
import React from "react"
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const MoviePresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>Movies</Text>;


MoviePresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default MoviePresenter;