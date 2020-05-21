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
  display: flex;
`;

const RouteContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-template-rows: repeat(12, [row-start] 48px);
  grid-gap: 20px;
`;

const OverflowingContainer = styled.div`
  margin: 30px;
  margin-right: 55px;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <ContainerShell>
      <LeftBar />
      <FlexRow style={{ width: '100%' }}>
        <TopBar />
        <OverflowingContainer>
          <RouteContainer>
            <BrowserRouter>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/" component={Home} />
              </Switch>
            </BrowserRouter>
            <Footer />
          </RouteContainer>
        </OverflowingContainer>
      </FlexRow>
    </ContainerShell>
  );
}

export default App;
