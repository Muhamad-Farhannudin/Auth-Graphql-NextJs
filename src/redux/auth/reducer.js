"use client"

import { USER_LOGIN } from './constants';

let initialState = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : { token: null, password: null, email: null };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                token: action.token,
                email: action.email,
                password: action.password,
            };

        default:
            return state;
    }
}
