import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setCurrentTFLService, setIsSearch } from '../../reducers/transportServices/transportServicesSlice'
import { Item, DisruptionIcons } from './MenuItem.styled'

const MenuItem = ({ service }) => {
    const dispatch = useDispatch()

    const renderNightIcon = (serviceTypes) => {
        const nightService = serviceTypes.filter(serviceType => serviceType.name === 'Night')
        if (nightService.length > 0) {
            return <FontAwesomeIcon data-testid="nightServiceIcon" icon="cloud-moon" color={'#141852'} />
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
            return <FontAwesomeIcon data-testid="goodSeviceIcon" icon="check-circle" color={'#4BB543'}/>
        } else {
            return <FontAwesomeIcon data-testid="disruptionsIcon" icon="exclamation-circle" color={'#F32013'} />
        }
    }

    const handleOnClick = () => {
        dispatch(setCurrentTFLService(service))
        dispatch(setIsSearch(false))
    }

    return (
        <Item onClick={() => handleOnClick()} data-testid="menuItem">
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
