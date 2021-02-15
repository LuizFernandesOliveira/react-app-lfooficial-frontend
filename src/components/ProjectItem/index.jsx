import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProjects} from '../../store/projects/action';

import {
  Container,
  Content,
} from './style';

function ProjectItem() {
  const { course } = useParams();
  const { data, isFetching } = useSelector(state => state.projects);
  const dispatch = useDispatch();

  const dispatchProjectsToState = () => {
    dispatch(getProjects());
  };

  useEffect(() => {
    dispatchProjectsToState();
  }, []);

  const projectsCourse = data.filter((project) => project.courseName === course) || [];

  if (isFetching) {
    return <h1>Carregando...</h1>;
  }

  if (!projectsCourse.length) {
    return <div>Ainda não adicionei nenhum projeto</div>;
  }

  return (
    <Container>
      {projectsCourse[0].projectItems.map((project) => (
        <Content key={project.projectName}>
          <img src={project.projectImage} alt={project.projectName}/>
          <a href={project.projectLink}>{project.projectName}</a>
        </Content>
      ))}
    </Container>
  );
}

export default ProjectItem;