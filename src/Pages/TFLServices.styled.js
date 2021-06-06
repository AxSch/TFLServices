import styled from 'styled-components'

const TFLServicesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(min-width: 768px) {
        flex-wrap: nowrap;
    }
`

export {
    TFLServicesContainer
}
