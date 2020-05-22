import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FlexRow from '../components/blocks/FlexRow';
import Footer from '../components/Footer';
import Home from './Home/Home';
import LeftBar from '../components/LeftBar';
import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

const ContainerShell = styled.div`
  max-height: 100vh;
  height: 100vh;
  display: grid;
  grid-template-columns: 121px calc(100% - 121px);
  grid-template-rows: 100px 100vh;
  grid-template-areas: 'leftbar topbar';
  grid-gap: 0;
`;

const RouteContainer = styled.div`
  margin: 0 30px;
  margin-bottom: 30px;
  padding-right: 55px;
  padding-bottom: 30px;
  overflow: auto;
`;

const GridContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(9, [col-start] 1fr);
  grid-template-rows: repeat(7, [row-start] 1fr);
  grid-template-areas:
    'card1 card1 card1 card2 card2 card2 card3 card3 card3'
    'pane pane pane pane pane pane buyIntention buyIntention buyIntention'
    'pane pane pane pane pane pane buyIntention buyIntention buyIntention'
    'pane pane pane pane pane pane buyIntention buyIntention buyIntention'
    'pane pane pane pane pane pane chart chart chart'
    'pane pane pane pane pane pane chart chart chart'
    'footer footer footer footer footer footer footer footer footer';
  grid-gap: 20px;
`;

function App() {
  return (
    <ContainerShell>
      <LeftBar />
      <TopBar />
      <RouteContainer>
        <GridContainer>
          <BrowserRouter>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </GridContainer>
      </RouteContainer>
    </ContainerShell>
  );
}

export default App;
