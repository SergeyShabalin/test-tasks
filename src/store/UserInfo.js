import {makeObservable, makeAutoObservable} from "mobx";
import axios from "axios";

class User {

    _info = 0
    _ded={}

    get ded() {
        return this._ded
    }

    set ded(value){
        this._ded=value
    }


    //привязать к useEffect
    getInfo(){
        axios.get('https://api.github.com/gists/e1702c1ef26cddd006da989aa47d4f62').then((response) => {
            this.ded =response.data
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

    constructor() {
        makeAutoObservable(this)
    }
    setInfo(){
        this._info = this._info-1
        console.log(this._info)
    }

    setInfo2(){
        this._info = this._info+1
        console.log(this.ded)
    }

}

export default new User()