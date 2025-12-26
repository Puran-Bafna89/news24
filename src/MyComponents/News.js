import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';


export default function News(props) {

    const [pageNo, setPageNo] = useState(1);
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const apiKey = process.env.REACT_APP_API_KEY;

    const loadNextPage = async () => {
        // console.log(pageNo);
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=${apiKey}&pagesize=5&page=${pageNo + 1}`);
        await setPageNo(pageNo + 1);
        let responseJson = await response.json();
        await setArticles(articles.concat(responseJson.articles));
    }

    const firstLetterCapitalize = (word) => {
        return word.charAt(0).toUpperCase().concat(word.substr(1));
    }

    useEffect(() => {
        document.title = `News24 - ${firstLetterCapitalize(props.catagory)} News`;
        props.setProgress(40);
        async function fetchData(){
            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=${apiKey}&pagesize=5&page=${pageNo}`);
    // console.log(response.articles);
            props.setProgress(60);
            let responseJson = await response.json();
            props.setProgress(80);
            await setArticles(responseJson.articles);
            await setTotalResults(responseJson.totalResults);
            props.setProgress(100);
        }
        fetchData();
        // eslint-disable-next-line
    },[]);


    return (
        <>
            <h2 style={{ fontSize: "4rem", textAlign: "center", margin: "100px 0 50px 0", color: "#2a3fa9" }}>{firstLetterCapitalize(props.catagory)} News - Top Headlines</h2>
            <InfiniteScroll className='d-flex flex-column align-items-center'
                dataLength={articles.length}
                next={loadNextPage}
                hasMore={totalResults >= articles.length ? true : false}
                loader={<div className="spinner-border text-primary d-block text-center my-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className="container">
                    <div className='d-flex flex-wrap'>
                        {/* {console.log(totalResults)} */}
                        {/* {articles.length === 0 && <h4>Loading...</h4>} */}
                        {articles.length !== 0 && articles.map((element, index) => {
                            return <NewsItem key={index} element={element} />
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
