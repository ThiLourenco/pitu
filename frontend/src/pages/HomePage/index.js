import React from 'react';

import Header from '../../components/Header';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import { ContentContainer, Form, AdsBlock } from './styles';

import ShortenerService from '../../services/shortenerService';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      url: '',
      code: '',
      errorMessege: '',
    }
  }

  handleSubmit = async(event) => {
    event.preventDefault();

    const { url } = this.state;

    this.setState({ isLoading: true, errorMessege: '' });

    if (!url) {
      this.setState({ isLoading: false, errorMessege: 'Informe uma url válida para o encurtar' });
    } else {
      try {
        const service = new ShortenerService();
        const result = await service.generate({ url });

        this.setState({ isLoading: false, code: result.code });
      }catch(err) {
        this.setState({ isLoading: false, errorMessege: 'Oops, ocorreu um erro ao tentar encurtar a sua url. :(' });
      }
    }
  }

  copyToClipboard = () => {
    const inputEl = this.inputURL;
    inputEl.select();
    document.execCommand('copy');
  }

  render() {

    const { isLoading, errorMessege, code } = this.state;

    return (
      <Container>
        <Header>Seu novo encurtador de URL. \O/ </Header>
        <ContentContainer> 
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='Digite a url para encurtar'
                defaultValue=''
                onChange={e => this.setState({ url: e.target.value })}
              />
              <InputGroup.Append>
                <Button variant='primary' type='submit'>Encurtar</Button>
              </InputGroup.Append>
            </InputGroup>

            { isLoading ?  (
              <Spinner animation='border' />
            ) : ( 
              code && (
                <> 
                <InputGroup className='mb-3'>
                  <FormControl
                    autoFocus={true}
                    defaultValue={`http://pitu.tk/${code}`}
                    ref={(input) => this.inputURL = input }
                  />
                  <InputGroup.Append>
                    <Button variant='outline-secondary' onClick={() => this.copyToClipboard()}>Copiar</Button>
                  </InputGroup.Append>
                </InputGroup>
                <p>Para acompanhar as estatísticas, acesse https://pitu.tk/{code}/stats</p>
                </>
              )   
             )}
             {errorMessege && <Alert variant='danger'>{errorMessege}</Alert>}  
          </Form>
        </ContentContainer>
        {/*<ContentContainer>
          <AdsBlock><p className='text-center'>AdSense</p></AdsBlock>
        </ContentContainer>*/}
      </Container>
    )
  }
}

export default HomePage;