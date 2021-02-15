import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  ProjectsContent,
  Title,
  LeftIcon,
} from './style';

const Heading = ({ title }) => {
  return (
    <ProjectsContent>
      <Title>
        <Link to="/">
          <LeftIcon/>
        </Link>
        {title}
      </Title>
    </ProjectsContent>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;