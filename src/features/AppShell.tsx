import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Home from './Home';
import LeftBar from '../components/LeftBar';
import People from './People';
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
      <BrowserRouter>
        <LeftBar />
        <TopBar />
        <div style={{ overflow: 'auto' }}>
          <RouteContainer>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/people" component={People} />
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </RouteContainer>
        </div>
      </BrowserRouter>
    </ContainerShell>
  );
}

export default App;
