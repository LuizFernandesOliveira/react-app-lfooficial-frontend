import React from 'react';
import {
  Link,
  useRouteMatch
} from 'react-router-dom';

import {
  Container,
  Content,
  CourseTitle,
  CourseImg
} from './style';

function CourseItem(props) {
  const {courseName, courseImage} = props.project;
  const { url } = useRouteMatch();

  return (
    <Container>
      <Link to={`${url}/${courseName}`}>
        <Content>
          <CourseTitle>{courseName}</CourseTitle>

          <CourseImg>
            <img src={courseImage} alt={courseName}/>
          </CourseImg>
        </Content>
      </Link>
    </Container>
  )
}

export default CourseItem;
