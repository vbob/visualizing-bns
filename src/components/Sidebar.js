import React, { useContext, useState } from 'react'
import { Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { NetworkContext } from '../contexts/NetworkContext';
import { TwitterPicker } from 'react-color';
import './Sidebar.css'

export function Sidebar() {
    const { setNetwork, color, setColor } = useContext(NetworkContext)

    const [showNodesPicker, setShowNodesPicker] = useState(false)
    const [showLinksPicker, setShowLinksPicker] = useState(false)

    const onchange = (e) => {
        let reader = new FileReader(e.file)
        reader.readAsText(e.file)
        reader.onload = async (e) => {
            let openedJson = e.target.result
            let content = await JSON.parse(openedJson)
            setNetwork(content)
        }
    }

    return (
        <>
            <h2>Inputs</h2>
            <Upload beforeUpload={() => false} onChange={onchange} maxCount={1}>
                <Button icon={<UploadOutlined />}>Bayesian Network</Button>
            </Upload>

            <br />

            <h2>Colors</h2>

            <Button onClick={() => setShowNodesPicker(val => !val)} style={{ marginBottom: '10px' }}>Nodes</Button>
            {showNodesPicker && <TwitterPicker
                id="color-picker"
                color={color.nodes}
                onChangeComplete={(newColor) => {
                    setColor(color => ({ ...color, nodes: newColor.hex }))
                }}
            />}

            <br />
            <Button onClick={() => setShowLinksPicker(val => !val)} style={{ marginBottom: '10px' }}>Edges</Button>
            {showLinksPicker && <TwitterPicker
                id="color-picker"
                color={color.links}
                onChangeComplete={(newColor) => {
                    setColor(color => ({ ...color, links: newColor.hex }))
                }}
            />}

           
        </>
    )
}


