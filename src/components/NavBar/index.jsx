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
      </Contador>
      <Menus>
        <Link to="/">127.0.0.1</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contacts">Contatos</Link>
        <a href="https://www.notion.so/ONE-WEEK-BACK-END-PROJECTS-a62184e320f8409bae1892101c88372b">OWBP</a>
      </Menus>
    </Container>
  );
}

NavBar.propTypes = {
  toggle: PropTypes.bool.isRequired,
}

export default NavBar;