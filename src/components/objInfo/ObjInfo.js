import React from "react";

import {observer} from "mobx-react-lite";
import {useStore} from "../../index";

import './ObjInfo.css'

const ObjInfo=()=>{

    const User = useStore()

    return(
        <div className='obj-info'>{User.obj}</div>
    )
}

export default observer(ObjInfo)