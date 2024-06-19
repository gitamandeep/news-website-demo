import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [news, setNews] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [result, setResult] = useState(18)
  

  const fetchdata = async (e) => {
    let a = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8f09f1bcc98c4f859c5ec03e5006f21e&page=1&pagesize=18")
    let data = await a.json()
    setNews(data.articles)
    console.log(data.articles)
  }

  const handlePreviousClick = async () => {
    console.log("Previous")
    setResult((result+18))
    let a = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8f09f1bcc98c4f859c5ec03e5006f21e&page=${page-1}&pagesize=18`)
    let data = await a.json()
    console.log(data.articles)
    setPage((page-1))
    setNews(data.articles)
  }

  const handleNextClick = async () => {
    console.log("Next");
    setResult((result - 18))
    console.log(result)
    let a = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8f09f1bcc98c4f859c5ec03e5006f21e&page=${page+1}&pagesize=18`)
    let data = await a.json()
    console.log(data.articles)
    setPage((page+1))
    setNews(data.articles)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <>
      <Navbar />
      <form action="" className='flex'>
        <input className='m-5 p-2 rounded-xl w-[95vw]' type="search" placeholder='Search- News Title' onChange={(e) => setSearch(e.target.value)} />

      </form>
      <div className="cards flex flex-wrap gap-5">
        {news.filter((card) => {
          return search.toLowerCase() === '' ? card : card.title.toLowerCase().includes(search)
        }).map((card) => {
          console.log(card)
          return <div key={card.id} className='card h-auto md:w-[400px] w-[600px] my-3 mx-3 bg-violet-100  rounded-xl'>
            <img className='rounded-3xl p-3' width={400} src={card.urlToImage == null ? "https://i.abcnewsfe.com/a/ccf45bb9-5de4-4470-8e88-a68b840a69b1/nevada-heat-gty-ml-240610_1718022192798_hpMain_16x9.jpg?w=1600" : card.urlToImage} alt="" />
            <div className='p-2'>
              <h1 className='text-3xl font-bold'>{card.author == null ? "The Associated Press" : card.author} </h1>
              <p className='text-2xl'>{card.title == null ? "Instead, he will focus his attention on his current roles: As a board member of Hybe, and CEO of Hybe America, the South Korea entertainment company. The..." : card.title}</p>
              <p className='py-4'>{card.description == null ? "News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events" : card.description}</p>
              <a href={card.url == null ? "https://www.newslink.com/" : card.url} target='_blank'><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-32 me-2 mb-2 ">Read More</button></a>
            </div>
          </div>
        })}
      </div>
      <div className='flex justify-between'>
        <button disabled={page<=1} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handlePreviousClick}> &larr; Previous</button>
        <button disabled={result<=0} type="button" className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleNextClick}>Next &rarr;</button>
      </div>

    </>
  )
}

export default App
