import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

let list = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
]

export default function List() {
    let [data, setData] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:3000/students').then(x => {
            setData(x.data)
        })
    }, [])
    return (
        <>
            <h3>List</h3>
            {data.map(i => (
                <p>{i.name}, {i.age}<Link to={'/home/detail/'+i.id}>Detail</Link></p>
            ))}
            <hr/>
        </>
    )
}