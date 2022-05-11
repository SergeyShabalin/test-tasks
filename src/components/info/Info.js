import React,{useEffect} from 'react'
import {observer} from "mobx-react-lite";
import {useStore} from "../../index";

import './Info.css'

const Info = () => {

    useEffect(()=>{
        User.getInfo()
    }, [])

    const User = useStore()



    return (
        <div className='main'>
            {User.fieldValue}
        </div>)
}

export default observer(Info)