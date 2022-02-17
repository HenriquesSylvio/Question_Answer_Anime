import axios from 'axios';
import jwtDecode from "jwt-decode";
import {addItem, getItem} from "./LocaleStorage";

const URLApi = 'http://127.0.0.1:8000/api/'

export function addQuestion(credentials) {
    return axios
        .post("http://127.0.0.1:8000/api/questions", credentials);
}