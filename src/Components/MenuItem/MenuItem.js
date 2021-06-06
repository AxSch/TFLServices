import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setCurrentTFLService } from '../../reducers/transportServices/transportServicesSlice'
import { Item, DisruptionIcons } from './MenuItem.styled'

const MenuItem = ({ service }) => {
    const dispatch = useDispatch()

    const renderNightIcon = (serviceTypes) => {
        const nightService = serviceTypes.filter(serviceType => serviceType.name === 'Night')
        if (nightService.length > 0) {
            return <FontAwesomeIcon icon="cloud-moon" />
        }
    }

    const renderDisruptionIcon = (lineStatus) => {
        const lineStatuses = lineStatus.filter(line => line.statusSeverity !== 10)
        let statusSeverity
        if (lineStatuses.length > 0) {
            statusSeverity = lineStatuses.map(line => {
                return line.statusSeverityDescription
            })
        } else {
            statusSeverity = lineStatus.map(line => {
                return line.statusSeverityDescription
            })
        }

        if (statusSeverity.length === 1 && statusSeverity[0] === 'Good Service') {
            return <FontAwesomeIcon icon="check-circle" />
        } else {
            return <FontAwesomeIcon icon="exclamation-circle" />
        }
    }

    const handleOnClick = () => {
        dispatch(setCurrentTFLService(service))
    }

    return (
        <Item onClick={() => handleOnClick()}>
            <div>
                {service.name}
            </div>
            <DisruptionIcons>
                {renderDisruptionIcon(service.lineStatuses)}
                {renderNightIcon(service.serviceTypes)}
            </DisruptionIcons>
        </Item>
    )
}


export default MenuItem
