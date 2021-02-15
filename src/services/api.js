import { user, projects } from './data';

export const fetchUser = () => new Promise((resolve, reject) => {
  const messege = 'não foi possível encontrar os dados';
  if (user) {
    resolve(user);
  } else {
    reject(messege);
  }
});

export const fetchProjects = () => new Promise((resolve, reject) => {
  const messege = 'não foi possível encontrar projetos';
  if (projects) {
    resolve(projects);
  } else {
    reject(messege);
  }
});