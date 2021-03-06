import { Col, Layout, Row } from 'antd';

import { NetworkContextProvider } from '../contexts/NetworkContext';
import { Main } from '../components/Main';
import { Sidebar } from '../components/Sidebar';

import './App.css'
import { Probabilities } from '../components/Probabilities';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <h3 style={{ color: 'white' }}>Visualizing Bayesian Networks</h3>``
      </Header>
      <NetworkContextProvider>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Row>
              <Col xs={24} md={6} style={{ borderRight: '1px solid #dddddd', paddingRight: '24px' }}>
                <Sidebar />
              </Col>
              <Col xs={24} md={9} style={{ paddingLeft: '24px', borderRight: '1px solid #dddddd', paddingRight: '24px' }}>
                <Main />
              </Col>
              <Col xs={24} md={9} style={{ paddingLeft: '24px' }}>
                <Probabilities />
              </Col>
            </Row>
          </div>
        </Content>
      </NetworkContextProvider>
    </Layout>
  );
}

export default App;
