import { useEffect, useState } from 'react';
import { Button, Col, Divider, Layout, Row, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import * as d3 from 'd3'
import './App.css'

const { Header, Content } = Layout;

function App() {
  const [network, setNetwork] = useState()

  useEffect(() => {
    console.log(network)
  }, [network])

  return (
    <Layout className="layout">
      <Header>
        <h3 style={{ color: 'white' }}>Visualizing Bayesian Networks</h3>``
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Row>
            <Col xs={24} md={6} style={{ borderRight: '1px solid #dddddd', paddingRight: '24px' }}>
              <h2>Inputs:</h2>
              <Upload beforeUpload={() => false} onChange={(e) => {
                let reader = new FileReader(e.file)
                reader.readAsText(e.file)
                reader.onload = async (e) => {
                  let openedJson = e.target.result
                  let content = await JSON.parse(openedJson)
                  setNetwork(content)
                }
              }} maxCount={1}>
                <Button icon={<UploadOutlined />}>Bayesian Network</Button>
              </Upload>
            </Col>
            <Col xs={24} md={18} style={{ paddingLeft: '24px' }}>
              <h2>Visualization:</h2>
              <span id="circle" />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
