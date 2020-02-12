import styled from 'styled-components';

export const IconText = styled.span`
    color: #1E1E1E;
    font-size:14px;


@media (max-width: 700px){

    display: ${props => props.notSmall ? 'none' : 'flex' }
}
`