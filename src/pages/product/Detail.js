import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
export default function Detail() {
    let [data, setData] = useState({});
    let {id} = useParams();

    useEffect(()=> {
        axios.get('http://localhost:3000/students/'+id).then(x => {
            console.log(x)
            setData(x.data)
        })
    }, [])
    return (
        <>
            <h3>Detail</h3>
            <h3>{data.name}</h3>
            <h3>{data.score}</h3>
            <h3>{data.action}</h3>
            <h3>{data.description}</h3>
            <hr/>
        </>
    )
}