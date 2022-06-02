export default function Panel(props) {
  var caminho = "../img/handmc.png";

  if (props.data.cardname == "") {
    caminho = "../img/handvisa.png";
  } else if (props.data.cardname == "MasterCard") {
    caminho = "../img/handmc.png";
  } else if (props.data.cardname == "MasterCard Electro") {
    caminho = "../img/handmc.png";
  }else {
    caminho = "../img/handvisa.png";
  }
    return (
        <div className="panel">
            <img src={caminho}/>
        </div>
    );
}