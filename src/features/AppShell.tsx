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
  grid-template-columns: 90px calc(100% - 90px);
  grid-template-rows: 100px 1fr;
  grid-template-areas: 'leftbar topbar';
  grid-gap: 0;
`;

const RouteContainer = styled.div`
  margin: 0 30px;
  margin-bottom: 30px;
  padding-right: 55px;
  padding-bottom: 30px;
`;

function App() {
  return (
    <ContainerShell>
      <LeftBar />
      <TopBar />
      <div style={{ overflow: 'auto' }}>
        <RouteContainer>
          <BrowserRouter>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </RouteContainer>
      </div>
    </ContainerShell>
  );
}

export default App;
