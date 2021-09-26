import React, { useState } from "react";

export const NetworkContext = React.createContext({});
export function NetworkContextProvider(props) {
    const [network, setNetwork] = useState()

    return (
        <NetworkContext.Provider value={{
            network, setNetwork
        }}>
            {props.children}
        </NetworkContext.Provider>
    )
}
