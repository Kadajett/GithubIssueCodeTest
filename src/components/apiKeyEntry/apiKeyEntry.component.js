import React from 'react'

export default function ApiKeyEntry(props) {
    return (
        <div>
            <input onChange={props.changeWatcher} type="text" name="" id="" placeholder="Github API Key"/>
        </div>
    )
}
