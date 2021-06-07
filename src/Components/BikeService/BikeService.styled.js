import styled from 'styled-components'
import { ServiceHeader, TFLServiceContainer } from '../TFLService/TFLService.styled'

const BikeServiceList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 90%;
    padding-left: 0;
    list-style-type: none;
    text-align: left;
`

const BikeServiceContainer = styled(TFLServiceContainer)`
`

const BikeServiceHeader = styled(ServiceHeader)`
    h4 {
        margin: 0;
    }
`

const BikeServiceListItem = styled.li`
    margin: 1.4rem 0;

    div {
        display: flex;
        justify-content: space-between;
    }
`

export {
    BikeServiceList,
    BikeServiceContainer,
    BikeServiceHeader,
    BikeServiceListItem
}
