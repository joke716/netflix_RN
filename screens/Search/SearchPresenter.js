
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";
import {exp} from "react-native-reanimated";

const Container = styled.div`
    flex: 1;
    background-color: ${BG_COLOR};
`;

const Input = styled.TextInput``;


const SearchPresenter = ({
    loading,
    tvResults,
     moviesResults,
     searchTerm,
     handleSearchUpdate
}) => (
    <Container>
        <Input
            onChange={handleSearchUpdate}
            value={searchTerm}
            autoFocus
            returnKeyType={"go"}
        />
    </Container>
);


SearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    tvResults: PropTypes.array,
    moviesResults: PropTypes.array,
    searchTerm: PropTypes.string,
    handleSearchUpdate: PropTypes.func.isRequired
};

export default SearchPresenter;