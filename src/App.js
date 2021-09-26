import { useEffect } from 'react';
import { Col, Layout, Row } from 'antd';

import * as d3 from 'd3'
import './App.css'

const { Header, Content } = Layout;

function App() {
  useEffect(() => {
    var svg = d3.select("#circle").append("svg").attr("width", 200).attr("height", 200)
    svg.append('circle')
      .attr('cx', 100)
      .attr('cy', 100)
      .attr('r', 50)
      .attr('stroke', 'black')
      .attr('fill', '#69a3b2');

    return () => {
      d3.select("#circle svg").remove()
    }
  }, [])

  return (
    <Layout className="layout">
      <Header>
        <h3 style={{ color: 'white' }}>Visualizing Bayesian Networks</h3>``
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Row>
            <Col xs={24} md={8}>
              File Input
            </Col>
            <Col xs={24} md={16}>
              <span id="circle" />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
