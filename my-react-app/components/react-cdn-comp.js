const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
function Greetings({name,age,city}){
     return (
       <div>
         <h1>Hello {name}</h1>
         {age ? <h1>age:{age}</h1> : null}
         {city ? <h1>City:{city}</h1> : null}
       </div>
     );
}
 const App=()=>{
    return (
      <div>
        <Greetings name="dev" age="18" city="Delhi" />
        <Greetings name="de"  />
        <Greetings name="d" />
      </div>
    );
}
root.render(<App/>)