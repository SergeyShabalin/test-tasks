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
        if (User.fieldValue === null) {
            return null
        } else {
            let list = Object.keys(User.fieldValue)
            let obj = list.map((value, id) => {
                return (
                    <div key={id}
                         className='object'
                         onClick={() => User.getObjFields(value)}
                    >{value}
                    </div>
                )
            })
            return obj
        }
    }

    return (
            <div className='main'>
                {typeof User.fieldValue !== "object"
                    ? User.fieldValue
                    : viewObject()}
                <button className=' bt btn btn-primary'>Refresh</button>
                <button className='bt btn btn-danger'>Remove</button>
            </div>
    )
}

export default observer(Info)