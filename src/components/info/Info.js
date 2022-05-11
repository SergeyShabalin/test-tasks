import React, {useEffect} from 'react'
import {observer} from "mobx-react-lite";
import {useStore} from "../../index";

import './Info.css'

const Info = () => {

    useEffect(() => {
        User.getInfo()
    }, [])

    const User = useStore()

    function viewObject() {
        let list = Object.keys(User.fieldValue)
        let obj = list.map((value, id) => {
            return (
                <div key={id}>{value}</div>
            )
        })
        return obj
    }

    return (
        <div className='main'>
            {typeof User.fieldValue !== "object" ? User.fieldValue : viewObject()}
        </div>
    )
}

export default observer(Info)