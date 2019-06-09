import React from 'react'

import { ApiKeyInput, ApiKeyWrapper } from "./apiKey.style";

export default function ApiKeyEntry(props) {
    return (
        <ApiKeyWrapper>
            <ApiKeyInput onChange={props.changeWatcher} type="text" name="" id="" placeholder="Github API Key"/>
        </ApiKeyWrapper>
    )
}
