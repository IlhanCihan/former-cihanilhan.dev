
import SearchMap from "./SearchMap";


export default function SearchResults({results}) {
    if (results.length === 0) return <></>

    return (
        <div style={{padding: '5px', backgroundColor: 'rgba(191, 191, 191, 1)' , borderRadius: '10px', marginBottom: '20px' ,position: 'absolute' ,marginTop: '3px', zIndex: '100000000000'}}>
            <h5 style={{marginTop: '10px'}}>{results.length} Results</h5>
            {results.map((result, index) => (
                <SearchMap key={index} post={result} compact={true} />
            ))}
        </div>
    )
}