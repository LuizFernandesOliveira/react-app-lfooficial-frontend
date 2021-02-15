import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../store/user/action';
import Header from '../../components/Header';

import {
  Container,
  Content,
  PerfilImage,
  PerfilAbout,
  Name,
  Bio,
  MainProfile,
  SideProfile,
  Resume,
} from './style';

import image from '../../assets/images/perfil.jpg';

const Home = () => {
  const { isFetching, data } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const dispatchToState = () => {
    dispatch(getUser());
  }

  useEffect(() => {
    dispatchToState();
  }, []);

  const {
    name,
    biography,
    resume,
  } = data;

  if (isFetching) {
    return (
      <di>Carregando...</di>
    );
  }

  return (
    <Container data-testid="home">
      <Header/>
      <Content>
        <PerfilAbout>
          <MainProfile>
            <PerfilImage>
              <img src={`${image}`} alt={name}/>
            </PerfilImage>
            <Name>{name}</Name>
            <Resume>{resume}</Resume>
          </MainProfile>
          <SideProfile>
            <Bio>
              <h1>[...] Um pouco mais</h1>
              <p>{biography}</p>
            </Bio>
          </SideProfile>
        </PerfilAbout>
      </Content>
    </Container>
  );
}

export default Home;
