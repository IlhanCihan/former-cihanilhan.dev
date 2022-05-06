import {useEffect, useState} from "react";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import SearchResults from "./SearchResults";

export default function Search() {


    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const getResults = async () => {
            if (searchTerm === '') {
                setSearchResults([])
            } else {
                const res = await fetch(`/api/search?q=${searchTerm}`)
                const { results } = await res.json()
                setSearchResults(results)
            }
        }

        getResults()
    }, [searchTerm])

    return (
        <div style={{marginRight: '0', marginLeft: 'auto'}}>
            <Form className="d-flex">
                <InputGroup>
                    <InputGroup.Text>

                        <FontAwesomeIcon  icon={ faMagnifyingGlass }/>
                    </InputGroup.Text>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                </InputGroup>
            </Form>
            <SearchResults results={searchResults}/>


        </div>
    )
}