import {profile,cardinsert,cardremove,about} from "../../utils/Functions";

export default function Navegation() {
    return (
        <div className="navbar">
            <ul>
              <li><a href="#">STClube</a></li>
              <li><a href="#" onclick={profile}>profile</a></li>
              <li><a href="#" onclick={cardinsert}>Card Insert</a></li>
              <li><a href="#" onclick={cardremove}>Card Remove</a></li>
              <li><a href="#" onclick={about}>About</a></li>
            </ul>
        </div>
    )
}