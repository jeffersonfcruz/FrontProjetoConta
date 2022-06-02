export default function Cards(props) {
  
  const passarDados = (pr) => {
    props.action (pr);
  }; 
  
  return (
        <div className="cards">
          {
            props.data.map((itens,ix)=>(
              <div key={ix} onClick={()=> passarDados(itens)}>
                <p>{

                itens.cardname.substring(0,4) === "VISA" ? 
                
                (<img src="../img/logovisa.png"/>
                ) : (
                  <img src="../img/logomc.png"/>
                )}</p>
              </div>
            ))
          } 
        </div>
    )
}