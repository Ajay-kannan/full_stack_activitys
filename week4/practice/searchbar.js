const Searchbar = ({setResult}) => {
    const [input, setInput] = useState("")
    const fetchdata = (value) => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        const result = json.filter((user) => {
          return value && user && user.name && user.name.toLowerCase().includes(value);
        }) ;
        setResult(result);
      })
    }
  
    const handleChange = (value) => {
      setInput(value);
      fetchdata(value)
    }
  
    return (
        <input
         value={input}
          onChange={e => {handleChange(e.target.value)} }
          placeholder='type to search'/>
      )
  }
  
  
  const Searchresult = ({result}) => {
    return (
      <div>
       {
        result.map((result,id) => {
          return <Searchlist result = {result.name} key={id} />
        })
       }
      </div>
    )
  }
  
  
  const Searchlist = ({result}) => {
    return (
      <div >{result}</div>
    )
  }
  
  
  
  function App() {
     const [result , setResult] = useState([]);
    return (
      <div className="App">
        <Searchbar setResult = {setResult} />
        <Searchresult result = {result} />
      </div>
    );
  }
  