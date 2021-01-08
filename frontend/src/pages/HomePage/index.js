import React from 'react';
import Header from '../../components/Header';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import { ContentContainer, Form, AdsBlock } from './styles';
import ShortenerService from '../../services/shortenerService';
import vars from '../../configs/vars';

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
      this.setState({ isLoading: false, errorMessege: 'Informe uma URL válida.' });
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
        <Header>Encurtador de URL</Header>
        <ContentContainer> 
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className='mb-4'>
              <FormControl
                placeholder='Cole aqui seu link'
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
                    defaultValue={vars.HOST_APP + code}
                    ref={(input) => this.inputURL = input }
                  />
                  <InputGroup.Append>
                    <Button variant='outline-success' onClick={() => this.copyToClipboard()}>Copiar</Button>
                  </InputGroup.Append>
                </InputGroup>
                <p>Para acompanhar as estatísticas acesse {vars.HOST_APP + code}/stats</p>
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