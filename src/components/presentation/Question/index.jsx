import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../../theme";

const Wrapper = styled.div`
  font-size: 1.5rem;
  display: flex;
  padding: 2rem;
  font-weight: bold;
  width: 50%;
  padding: 1.5rem;
  border: 1px ${theme.color.primary} solid;
  margin: 2rem;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    background: ${theme.color.gray3};
  }
`;

function Question(props) {
  return <Wrapper onClick={props.handleClick}>{props.children}</Wrapper>;
}

Question.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Question;
