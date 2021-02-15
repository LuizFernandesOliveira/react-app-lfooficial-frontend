import React from 'react';

import {Container} from './style';
import Header from '../../components/Header';
import Heading from '../../components/Heading';

const Contacts = () => {
  return (
    <Container>
      <Header/>
      <Heading title="Contatos"/>
    </Container>
  );
}

export default Contacts;