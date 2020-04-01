import React from 'react'
import { useDispatch } from 'react-redux'
import { set_language } from 'actions'

function Header() {
    const dispatch = useDispatch()

    const changeLang = e => {
        dispatch(set_language({language:e.target.value}))
    }

    return <>
        <h1>Header</h1>
        <select onChange={changeLang}>
            <option value="zh">zh</option>
            <option value="en">en</option>
        </select>
    </>
}

export default Header