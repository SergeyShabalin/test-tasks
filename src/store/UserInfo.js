import {makeAutoObservable} from "mobx";
import axios from "axios";

class User {

    _fieldValue = 'url'
    _users = {}
    _obj={}

    get users() {
        return this._users
    }

    set users(value) {
        this._users = value
    }

    get fieldValue() {
        return this._fieldValue
    }

    set fieldValue(value) {
        this._fieldValue = value
    }

    get obj(){
        return this._obj
    }

    set obj(value) {
        this._obj = value
    }

    constructor() {
        makeAutoObservable(this)
    }

    getInfo() {
        axios.get('https://api.github.com/gists/e1702c1ef26cddd006da989aa47d4f62').then((response) => {
            this.users = response.data
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

    getDataFields(field) {
        this.fieldValue = this.users[field]
    }

    getObjFields(value){
        this.obj = this.fieldValue[value]
        console.log(this._obj)
    }

}

export default new User()