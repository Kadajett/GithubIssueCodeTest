import React from 'react'
import {ButtonGeneralWrapper, ButtonGeneral as ButtonGeneralStyle} from "./buttonGeneral.style";
export default function ButtonGeneral(props) {
    function onClick() {
        props.onClick();
    }
    return (
        <ButtonGeneralWrapper>
            <ButtonGeneralStyle onClick={onClick}>General Button!</ButtonGeneralStyle>
        </ButtonGeneralWrapper>
    )
}
