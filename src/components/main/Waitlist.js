export default function Waitlist() {
    return (
        <div className="waitlist">
          <div>
            <img src="../img/waitlist.png"/>
          </div>
          <input type="email" placeholder="Your Email"/>
          <a href="#">JOIN THE WAITLIST</a>
          <p>
            <span>
              <h4>5.675+</h4>
              <br/>
              Happy Costumers
            </span>
            <span>
              <h4>11.875+</h4>
              <br/>
              Cards Issued
            </span>
          </p>
          <img src="../img/line.png" className="linha"/>
        </div>
    )
}