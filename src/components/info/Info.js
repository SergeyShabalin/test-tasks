import React from 'react'
import './Info.css'

import {observer} from "mobx-react-lite";
import {useStore} from "../../index";

const Info = () => {
const User = useStore()
    console.log(User)
    return (
        <div className='main'>
            {User.ded.comments_url}

            <button onClick={()=> User.getInfo()}>ded</button>
            <button onClick={() => User.setInfo()}>info</button>
            <button onClick={() => User.setInfo2()}>info2</button>

        </div>)
}

export default observer(Info)