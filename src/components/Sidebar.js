import React, { useContext } from 'react'
import { Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { NetworkContext } from '../contexts/NetworkContext';

export function Sidebar() {
    const { setNetwork } = useContext(NetworkContext)

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
            <h2>Inputs:</h2>
            <Upload beforeUpload={() => false} onChange={onchange} maxCount={1}>
                <Button icon={<UploadOutlined />}>Bayesian Network</Button>
            </Upload>
        </>
    )
}


