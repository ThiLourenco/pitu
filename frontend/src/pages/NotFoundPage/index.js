import React from 'react';
import { Container } from 'react-bootstrap';
import Buttom from '../../components/Buttom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StatsContainer } from './styles';

class NotFoundPage extends React.Component {
  
  render() {
    return (
     
      <Container>    
         <>
            <StatsContainer className='text-center'>
              <h2 className="text-center mb-3">Oops... Página não encontrada :( </h2>

              <FontAwesomeIcon size='7x' color='#f8d7da' icon='exclamation-triangle' />
              <p className='m-3'>Retorne a página inicial</p>
              <Buttom />
            </StatsContainer>
          </>
      </Container>
    )
  }
}

export default NotFoundPage;