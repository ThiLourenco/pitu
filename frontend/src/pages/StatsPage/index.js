import React from 'react';
import Header from '../../components/Header';
import Buttom from '../../components/Buttom';

import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ShortenerService from '../../services/shortenerService';

import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import vars from '../../configs/vars';

import { 
  StatsContainer, 
  StatsRow, 
  StatsBox, 
  StatsBoxTitle 
} from './styles';

class StatsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      shortenedURL: {},
      errorMessage: '',
    }
  }

  async componentDidMount() {
    const { code } = this.props.match.params;
 
    try {
      const service = new ShortenerService();
      const shortenedURL = await service.getStats(code);

      const parsedDate = parseISO(shortenedURL.updatedAt);
      const currentDate = new Date();

      const relativeDate = formatRelative(parsedDate, currentDate, {
        locale: ptBR,
      });

      shortenedURL.relativeDate = relativeDate;

      this.setState({ isLoading: false, shortenedURL });
    } catch(err) {
      this.setState({ isLoading: false, errorMessage: 'Oops, ocorreu um erro ao consultar as estatísticas.'})

    }
  }

  render() {
    
    const {errorMessage, shortenedURL } = this.state;

    return (
      <Container>
        <Header>Estatística</Header>
        {errorMessage ? (
          <StatsContainer className='text-center'>
            <FontAwesomeIcon size='5x' color='#f8d7da' icon='exclamation-triangle' />
            <p className='m-3'>{errorMessage}</p>
            <Buttom />
          </StatsContainer>
        ) : (
          <StatsContainer className='text-center'>
            <p><strong>{vars.HOST_APP + shortenedURL.code}</strong></p>
            <p>Redireciona para: <br/> {shortenedURL.url}</p>
            <StatsRow>
              <StatsBox>
                <b>{shortenedURL.hits}</b>
                <StatsBoxTitle>Visitas</StatsBoxTitle>
              </StatsBox>
              <StatsBox>
                <b>{shortenedURL.relativeDate}</b>
                <StatsBoxTitle>Última visita</StatsBoxTitle>
              </StatsBox>
            </StatsRow>
            <Buttom />
          </StatsContainer>
        )}
      </Container>
    )
  }
}

export default StatsPage;