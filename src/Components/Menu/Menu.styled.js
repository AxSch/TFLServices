import styled from 'styled-components'

const MenuList = styled.ul`
    width: 90%;
    padding-left: 0;
    margin: 1rem 1.4rem;
    border: 1px solid black;
    list-style-type: none;
    text-align: left;
    border-radius: 4px;

    @media(min-width: 768px) {
        width: 60%;
    }
    
    @media(min-width: 1024px) {
        width: 30%;
    }
`

export {
    MenuList
}
