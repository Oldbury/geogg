import axios from 'axios'
import React, { useState } from 'react'
import ResultList from '../Results/List'

const SearchBar = () => {

    const [searchText, setSearchText] = useState<string>('')
    const [result, setResult] = useState<[string]>([''])

    const getLocations = async (e: string) => {
        setSearchText(e)
        // input length validation handled server side
        if (searchText.length > 2) {
            try {
                const res = await axios.get('http://localhost:3001/locations?q=' + searchText)
                if (res.data === "not searching, enter more characters to search") {
                    console.log(res.data)
                }
                console.log('res,', res)
                setResult(res.data)
            } catch (error) {
                console.error(`There was an error getting the data from the server - please try again soon\n${error}`)
            }

        }
    }

    return (
        <div>
            <div className="flex flex-row justify-between bg-gray-100 rounded-md px-3 py-3 w-full md:w-3/4 mx-auto" >
                <input placeholder="Search..." onChange={e => getLocations(e.target.value)}
                    className="border-none bg-gray-100 w-full" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>

            </div>
            {/* <h1>Results {result}</h1> */}
            <div className="bg-white" >
                {searchText.length > 2 ?
                    <ResultList locations={result} />
                    :
                    <div className="text-center py-3" >
                        <h1>Start typing to search for a location</h1>
                    </div>

                }
            </div>


        </div>


    )
}

export default SearchBar