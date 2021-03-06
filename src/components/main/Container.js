import { useEffect , useState } from "react";

import Cards from "./Cards";
import Panel from "./Panel";
import Plans from "./Plans";
import Waitlist from "./Waitlist";
import Balance from "./Balance";
import {path} from "../../config/path";

export default function Container() {
    
    const [datacards , setDataCards ] = useState([]);
    useEffect(()=>{
        fetch(`${path}/wallet/list/user/62964f81f3c9afc72b8eaba4`,{
            method:"GET",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTY0ZjgxZjNjOWFmYzcyYjhlYWJhNCIsInVzZXIiOiJyYWZhZWwiLCJlbWFpbCI6InJhZmFlbEBlbWFpbC5jb20iLCJpYXQiOjE2NTQ4ODA4NzQsImV4cCI6MTY1NTA1MzY3NH0.f2oKAf285Ivjvk0oDFLCv1iWWeJoDguLrfPe4828xPI"
            }
        })
        .then((result)=>result.json())
        .then((data)=>{
            console.log(data.payload);
            setDataCards(data.payload);

        }).catch((err)=>console.error(`error at loading api -> ${err}`));
        
    },[]);


const [balance, setBalance] = useState([])
const changeData = (content) => {
    setBalance (content)
}
    return (
        <div className="container">
            <Cards data={datacards} action={changeData}/>
            <Panel data={balance}/>
            <Waitlist/>
            <Plans/>
            <Balance data={balance}/>
        </div>
    )
}