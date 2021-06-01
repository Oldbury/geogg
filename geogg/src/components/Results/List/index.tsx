import React from 'react'
import ResultCard from '../Card'

interface Props {
    locations: [string]
}
const ResultList = (props: Props) => {

    const locations: [string] = props.locations

    return (
        <div className="bg-white border border-gray-50 shadow-md rounded-md space-y-2">
            {locations.map((item: string, i: number) => {
                return (
                     <ResultCard name={item} />
                )
               
            })}

        </div>
    )
}

export default ResultList