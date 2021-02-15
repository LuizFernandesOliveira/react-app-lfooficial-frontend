import React from 'react';

import {NotFoundContainer, Text} from './style';

const NotFound = () => {
  return (
    <NotFoundContainer data-testid="404-error">
      <Text>
        Página não encontrada
      </Text>
    </NotFoundContainer>
  );
}

export default NotFound;