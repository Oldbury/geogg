// import React from 'react'

interface Props {
    name: String
}

const ResultCard = (props: Props) => {

    return (
        <div className="bg-white border-b px-3 py-2  text-black" >
            <h1>{props.name}</h1>
        </div>
    )

}

export default ResultCard