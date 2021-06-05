import React from 'react'

const MenuItem = ({ service }) => {
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

    return (
        <li>
            <div>
                <h3>{service.name}({service.modeName}) {renderDisruptionIcon(service.lineStatuses)} {renderNightIcon(service.serviceTypes)}</h3>
            </div>
        </li>
    )
}


export default MenuItem
