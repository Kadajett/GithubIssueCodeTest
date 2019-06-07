import styled from "styled-components";

export const AvatarWrapper = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${props => props.login.avatarUrl});
    background-repeat: no-repeat;
    background-size: 100%;
`;