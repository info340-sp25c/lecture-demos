import React, { useState } from 'react';

//example GitHub repo data
const EXAMPLE_DATA = [
  { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
  { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },
  { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" }
];


function App(props) {
  const [stateData, setStateData] = useState(EXAMPLE_DATA);
  //control form
  const [queryInput, setQueryInput] = useState('');

  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitting form");

    //do something with form input!
    const queryNOW = queryInput
    console.log("query is", queryNOW)

    const url = "https://api.github.com/search/repositories?q=" + queryInput + "&sort=stars"
    console.log('url', url)

    try {
      const response = await fetch(url);
      console.log('results of fetch', response)
      const json = await response.json()
      console.log('json', json)
      setStateData(json.items)
    } catch (error) {
      console.log("there was an error", error)
    }


    // fetch(url).then((results) => {
    //   console.log("fetch, then", results)
    //   return results.json()
    // }).then((jsonData) => {
    //   console.log('json data', jsonData, jsonData.items)
    //   setStateData(jsonData.items)
    // })
    // console.log("this is the next line after fetch in the code")


  }


  //render the data
  const dataElemArray = stateData.map((repo) => {
    return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
  })

  console.log("rendering content");

  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header>

      <form onSubmit={handleSubmit} method="GET" action="https://api.github.com/search/repositories">
        <input type="text" className="form-control mb-2"
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <input type="hidden" name="sort" value="stars" />
        <button type="submit" className="btn btn-primary" >Search!</button>
      </form>

      <div className="mt-4">
        <h2>Results</h2>
        {/* results go here */}
        {dataElemArray}
      </div>
    </div>
  )
}

export default App;