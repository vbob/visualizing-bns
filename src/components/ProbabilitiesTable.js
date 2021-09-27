import React from 'react'

export default function ProbabilitiesTable(props) {
    return (
        <>
            <h3>
                {props.node.variable}
            </h3>

            <div>
                <table>
                    {props.node.parents.map((p, i) => {
                        return <tr>
                            <td style={{ fontWeight: 600, border: "1px solid black" }}>{p}</td>
                            {
                                Array.isArray(props.node.parentsStates) && props.node.parentsStates.map(e => {
                                    return <td style={{ border: "1px solid black" }}>
                                        {Array.isArray(e) ? e[i] : e}
                                    </td>
                                })
                            }

                        </tr>
                    })}
                    {props.node.p.map(p => {
                        return <tr>
                            <td style={{ border: "1px solid black" }}>{p.class}</td>
                            {!Array.isArray(p.p) ?
                                <td style={{ border: "1px solid black" }}>
                                    {(Number.parseFloat(p.p) * 100).toFixed(2)}%
                                </td> :
                                p.p.map(e => {
                                    console.log(props.node)
                                    return <td style={{ border: "1px solid black" }}>
                                        {(Number.parseFloat(e) * 100).toFixed(2)}%
                                    </td>
                                })}
                        </tr>
                    })}
                </table>
                <br />
            </div>


        </>
    )
}
