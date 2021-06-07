import styled from 'styled-components'

const Item = styled.li`
    padding: 0.7rem 0.5rem;
    cursor: pointer;
    border-bottom: 1px solid #d8d8d8;
    
    &:hover {
        background-color: #ececec;
        border-radius: 4px;
    }

    &:last-child {
        border-bottom: none;
    }
`

const DisruptionIcons = styled.div`
    display: flex;
    align-items: center;
    padding: 0.4rem 0;

    svg {
        margin-right: 0.4rem;
    }
`

export {
    Item,
    DisruptionIcons,
}
