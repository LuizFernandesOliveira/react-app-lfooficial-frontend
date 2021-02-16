import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {
  Contador,
  Container,
  Menus,
} from './style';

const NavBar = ({toggle}) => {

  return (
    <Container menuActive={toggle}>
      <Contador>
        visitors:
        <a href='https://contador.s12.com.br'>
          <img src='https://contador.s12.com.br/img-6ZBbxd43Bby84y1Y-2.gif' border='0' alt='contador gratuito'/>
        </a>
        <script type='text/javascript' src='https://contador.s12.com.br/ad.js?id=6ZBbxd43Bby84y1Y'></script>
      </Contador>
      <Menus>
        <Link to="/">127.0.0.1</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contacts">Contatos</Link>
      </Menus>
    </Container>
  );
}

NavBar.propTypes = {
  toggle: PropTypes.bool.isRequired,
}

export default NavBar;