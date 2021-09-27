import React, { useState } from "react";

export const NetworkContext = React.createContext({});
export function NetworkContextProvider(props) {
    const [network, setNetwork] = useState()
    const [color, setColor] = useState({
        nodes: "#000",
        links: "#AAA"
    })

    return (
        <NetworkContext.Provider value={{
            network, setNetwork,
            color, setColor
        }}>
            {props.children}
        </NetworkContext.Provider>
    )
}
