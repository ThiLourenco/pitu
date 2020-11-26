import React from 'react';
import Header from '../../components/Header';
import { Container, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StatsContainer } from './styles';
import ShortenerService from '../../services/shortenerService';

class RedirectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      url: '',
      errorMessage: '',
    }
  }

  async componentDidMount() {
    const { code } = this.props.match.params;

    try {
      const service = new ShortenerService();
      const { url } = await service.getLink(code);

      window.location = url;
    } catch(err) {
      this.setState({ isLoading: false, errorMessage: 'Oops, a url solicitada não existe!' });
    }
  }

  render() {

    const { errorMessage } = this.state;

    return (
      <Container>
        {errorMessage ? (
          <>
            <Header>
              Seu novo encurtador de urls.
            </Header>
            <StatsContainer className='text-center'>
              <FontAwesomeIcon size='8x' color='#f8d7da' icon='exclamation-triangle' />
              <p className='m-3'>{errorMessage}</p>
              <a className='btn btn-outline-primary' href='/'>Encurtar nova URL</a>
            </StatsContainer>
          </>
        ) : (
          <Container>
          <StatsContainer className='text-center m-3'>
          <h4 className="text-center">Estamos redirecionando...</h4>
          <Spinner animation='border' role='status' />
          </StatsContainer>
          </Container>
        )} 
      </Container>
    );
  }
}

export default RedirectPage;