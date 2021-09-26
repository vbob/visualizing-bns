import { useEffect, useState } from 'react';
import { Button, Col, Divider, Layout, Row, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import * as d3 from 'd3'
import { schemeCategory10 } from 'd3-scale-chromatic';
import './App.css'

const { Header, Content } = Layout;

const [height, width] = [400, 400]

function App() {
  const [network, setNetwork] = useState()

  useEffect(() => {
    const color = d => {
      const scale = d3.scaleOrdinal(d3.schemeCategory10);
      return scale(d.group);
    }

    const drag = simulation => {

      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    function linkArc(d) {
      const r = 0;
      return `
        M${d.source.x},${d.source.y}
        A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
      `;
    }

    if (network) {
      const nodes = network.nodes.map(node => ({ "id": node.name, "name": node.name }))
      const links = network.edges.map(edge => ({ source: edge[0], target: edge[1] }))

      const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

      const svg = d3.select("#visualization")
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .style("font", "8px sans-serif");

      svg.append("defs").selectAll("marker")
        .data(["end"])
        .join("marker")
        .attr("id", d => d)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 18)
        .attr("refY", 0)
        .attr("markerWidth", 4)
        .attr("markerHeight", 4)
        .attr("orient", "auto")
        .append("path")
        .attr("fill", "#E05454")
        .attr("d", "M0,-5L10,0L0,5");


      const link = svg.append("g")
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .selectAll("path")
        .data(links)
        .join("path")
        .attr("stroke", "#E05454")
        .attr("marker-end", d => `url(#end)`);

      const node = svg.append("g")
        .attr("fill", "#FB2F01")
        .attr("stroke-linecap", "round")
        .attr("stroke-linejoin", "round")
        .selectAll("g")
        .data(nodes)
        .join("g")
        .call(drag(simulation));

      node.append("circle")
        .attr("stroke", "white")
        .attr("stroke-width", 1.5)
        .attr("r", 4);

      node.append("text")
        .attr("x", 8)
        .attr("y", "0.31em")
        .text(d => d.id)
        .clone(true).lower()
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 3);


      simulation.on("tick", () => {
        link.attr("d", linkArc);
        node.attr("transform", d => `translate(${d.x},${d.y})`);
      });
    }

    return () => {
      d3.select("#visualization svg").remove()
    }
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
              <span id="visualization" />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
