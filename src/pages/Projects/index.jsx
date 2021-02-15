import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProjects} from '../../store/projects/action';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import CourseItem from '../../components/CourseItem';

import Routes from './routes';

import {
  Container,
  Content,
  CourseItems,
  ProjectItems,
} from './style';

const Projects = () => {
  const dispatch = useDispatch();
  dispatch(getProjects());

  const projects = useSelector(state => state.projects.data) || [];
  return (
    <Container>
      <Header />
      <Heading title="Projetos" />
      <Content>
        <CourseItems>
          {projects.map((project) => (<CourseItem key={project.id} project={project} />))}
        </CourseItems>
        <ProjectItems>
          <Routes />
        </ProjectItems>
      </Content>
    </Container>
  );
}

export default Projects;