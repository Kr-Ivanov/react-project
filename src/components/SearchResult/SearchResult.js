import { useStateValue } from '../../StateProvider';

const SearchResult = () => {
    const [{ search }, dispatch] = useStateValue();
    return (
        <div>
            <h1>Search Result</h1>
            <h2>{search}</h2>
        </div>
    )
}

export default SearchResult
