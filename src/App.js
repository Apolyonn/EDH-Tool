import Deckcard from "./deckcard";
import Builder from "./builder";

function App() {
  return (
       <div className="Card">
            <header className="App-header">
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                    <h1>
                    Your Decks
                    </h1>
                </div>  
            </header>
      <div className="Card" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Deckcard/>
        </div>
</div>
 
  );
}

export default App;
