import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {
  Container,
  Menus,
} from './style';

const NavBar = ({toggle}) => {

  return (
    <Container menuActive={toggle}>
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