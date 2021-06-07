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

const MenuSearch = styled.input`
    width: 100%;
    margin-top: 1rem;
    padding: 1rem;
`

const MenuSearchLabel = styled.label`
    padding: 0.4rem;
    margin-bottom: 1.2rem;
`

const MenuForm = styled.form`
    padding-top: 1rem;
`

export {
    MenuList,
    MenuSearch,
    MenuSearchLabel,
    MenuForm
}
