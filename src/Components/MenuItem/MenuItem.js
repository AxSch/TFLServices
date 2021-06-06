import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentTFLService } from '../../reducers/transportServices/transportServicesSlice'

const MenuItem = ({ service }) => {
    const dispatch = useDispatch()

    const renderNightIcon = (serviceTypes) => {
        const nightService = serviceTypes.filter(serviceType => serviceType.name === 'Night')
        if (nightService.length > 0) {
            return (
                <>Icon - night</>
            )
        }
    }

    const renderDisruptionIcon = (lineStatus) => {
        const lineStatuses = lineStatus.filter(line => line.statusSeverity !== 10)
        if (lineStatuses.length > 0) {
            return lineStatuses.map(line => {
                return line.statusSeverityDescription
            })
        } else {
            return lineStatus.map(line => {
                return line.statusSeverityDescription
            })
        }
    }

    const handleOnClick = () => {
        dispatch(setCurrentTFLService(service))
    }

    return (
        <li onClick={() => handleOnClick()}>
            <div>
                {service.name}
            </div>
            <div>
                {renderDisruptionIcon(service.lineStatuses)}
                {renderNightIcon(service.serviceTypes)}
            </div>
        </li>
    )
}


export default MenuItem
