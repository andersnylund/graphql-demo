import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  color: goldenrod;
  text-shadow: 1px 1px 1px gray;
`;

const PostTitle = ({ title }) => {
  return <H1>{title}</H1>;
};

PostTitle.propTypes = {
  title: string.isRequired,
};

export default PostTitle;
