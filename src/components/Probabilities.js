import React, { useContext } from 'react'
import { NetworkContext } from '../contexts/NetworkContext'
import ProbabilitiesTable from './ProbabilitiesTable'

export function Probabilities() {
    const { network } = useContext(NetworkContext)



    return (
        <div>
            <h2>Conditional Probabilities</h2>

            {network && network.probabilities.map(e => {
                return <ProbabilitiesTable node={e} />
            })}

        </div>
    )
}
