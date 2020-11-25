import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StatsContainer } from './styles';

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     
      <Container>    
         <>
            <StatsContainer className='text-center'>
              <h2 className="text-center mb-3">Oops... Page not found :( </h2>

              <FontAwesomeIcon size='7x' color='#f8d7da' icon='exclamation-triangle' />
              <p className='m-3'>Retorne a página principal</p>
              <a className='btn btn-primary' href='/'>Retornar</a>
            </StatsContainer>
          </>
      </Container>
    )
  }
}

export default NotFoundPage;