import React, {useEffect} from 'react'
import {useStore} from "../../index";
import {observer} from "mobx-react-lite";

import './Table.css'

const  Table=()=> {

    const UserInfo = useStore()

    function getFields() {
        let list = Object.keys(UserInfo.users)
        let fields = list.map((item, id) => {

            return (
                <tr
                    className='fields'
                    key={id}
                    onClick={()=>UserInfo.getDataFields(item)}
                >{item}</tr>
            )
        })
        return fields
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Наименование</th>
            </tr>
            </thead>
            <tbody>
                {getFields()}
            </tbody>
        </table>
    )
}

export default observer(Table)