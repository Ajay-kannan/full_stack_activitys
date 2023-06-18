function Pokemoncard({pokemon}) {
    return (
      <div>
        {
          pokemon.map((p)=> {
          return <div> {p}</div>
          })
        }
      </div>
    )
  }
  
  function Pagination ({gotonextpage , gotoprevpage})
  {
    return (
      <div>
        {gotoprevpage && <button onClick={gotoprevpage}>prev</button>}
        {gotonextpage && <button onClick={gotonextpage}>next</button>}
      </div>
    )
  }
  
  
  const App = () => {
    const [pokemon, setPokemon] = useState(["bulbastur","charmandar"]);
    const [currentpageurl, setcurrentpageurl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextpageurl, setnextpageurl] = useState();
    const [prevpageurl, setprevpageurl] = useState();
    const [loading, setloading] = useState();
  
    useEffect(()=>{
      setloading(true);
      axios.get(currentpageurl).then(res => {
        setloading(false);
        setnextpageurl(res.data.next);
        setprevpageurl(res.data.previous);
        setPokemon(res.data.results.map(p => p.name));
      })
    },[currentpageurl])
  
    if (loading) return "loading..."
  
    function gotonextpage()
    {
      setcurrentpageurl(nextpageurl);
    }
  
    function gotoprevpage()
    {
      setcurrentpageurl(prevpageurl);
    }
  
    return (
      <div>
          <Pokemoncard pokemon={pokemon}/>
          <Pagination 
          gotonextpage={nextpageurl ? gotonextpage : null} 
          gotoprevpage={prevpageurl ? gotoprevpage : null} 
          />
      </div>
    )
  }
  