import React, {} from 'react'
import Table from "./components/table/Table";
import Info from "./components/info/Info";
import ObjInfo from "./components/objInfo/ObjInfo";

import './App.css'


export default function App() {

    return (
        <div className='contain'>
            <Table/>
            <Info/>
            <ObjInfo/>
        </div>
    )
}
