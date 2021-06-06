import styled from 'styled-components'

const TFLServiceContainer = styled.div`
    margin-top: 1.2rem;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    padding: 1rem;

    @media(min-width: 768px) {
        margin-top: 0;
        align-content: start;
    }
    
    @media(min-width: 1024px) {
        justify-content: start;
        width: 50%;
    }
`
const ServiceHeader = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 1024px) {
        align-items: start;
    }
`

const ServiceDisruptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media(min-width: 1024px) {
        align-content: start;
        justify-content: start;
    }
`

const ServiceDisruptionsList = styled.ul`
    list-style-type: none;
    text-align: left;
    padding-left: 1.4rem;

    @media(min-width: 1024px) {
        padding-left: 0; 
    }
`

const DisruptionsListItem = styled.li`
    margin: 1.4rem 0;
`


export {
    ServiceHeader,
    TFLServiceContainer,
    ServiceDisruptions,
    ServiceDisruptionsList,
    DisruptionsListItem,
}
