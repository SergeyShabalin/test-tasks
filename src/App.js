import Table from "./components/table/Table";
import Info from "./components/info/Info";
import React, {useEffect, useState} from 'react'
import axios from "axios";

import './App.css'

export default function App() {

    useEffect(() => {
        getData()
    }, []);

    const [user, setUser] = useState({})

    function getData() {
        axios.get('https://api.github.com/gists/e1702c1ef26cddd006da989aa47d4f62').then((response) => {
            setUser(response.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

    function getFields(){
        let list = Object.keys(user)
        let fields =  list.map((item, id) => {

            return(
                <tr key={id}>{item}</tr>
            )
        })
        return fields
    }

    return (
        <div className='container'>
            <Table
                getFields={getFields}
            />
            <Info
            user={user}
            />
        </div>
    )
}
