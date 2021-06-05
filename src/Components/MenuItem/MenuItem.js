import React, { useState, useEffect } from 'react'

const MenuItem = ({ service }) => {
    const [isDisrupted, setIsDisrupted] = useState(false)
    
    useEffect(() => {
        const lineStatuses = service.lineStatuses.filter(line => line.statusSeverity !== 10)
        if (lineStatuses.length > 0) {
            setIsDisrupted(true)
        }
    }, [isDisrupted])

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
                return (
                    <>
                        <span>{line.statusSeverityDescription}</span>
                    </>
                )
            })
        } else {
            return lineStatus.map(line => {
                return (
                    <>
                        <span>{line.statusSeverityDescription} - No service disruptions</span>
                    </>
                )
            })
        }
    }

    const renderDisruptions = (lineStatus) => {
        const lineStatuses = lineStatus.filter(line => line.statusSeverity !== 10)
        if (lineStatuses.length > 0) {
            return lineStatuses.map(line => {
                return (
                    <li>
                        {line.reason}
                    </li>
                )
            })
        }
    }

    return (
        <li>
            <div>
                <h3>{service.name}({service.modeName}) {renderDisruptionIcon(service.lineStatuses)} {renderNightIcon(service.serviceTypes)}</h3>
                {isDisrupted ?
                    <ul>
                        {renderDisruptions(service.lineStatuses)}
                    </ul>
                    : null}
            </div>
        </li>
    )
}


export default MenuItem
