import React, { useState, useEffect } from 'react'

const TFLService = ({ service }) => {
    const [isDisrupted, setIsDisrupted] = useState(false)
    const severeLineStatuses = service.lineStatuses.filter(line => line.statusSeverity !== 10)

    useEffect(() => {
        if (severeLineStatuses.length > 0) {
            if (severeLineStatuses[0].statusSeverity !== 10 ) {
                setIsDisrupted(true)
            }
        } else {
            setIsDisrupted(false)
        }
    }, [isDisrupted, severeLineStatuses])

    const renderDisruptionHeader = () => {
        if (severeLineStatuses.length > 0) {
            return (
                <span>
                    Service is currently suffering disruptions
                </span>
            )
        } else {
            return (
                <span>
                    No service disruptions
                </span>
            )
        }
    }

    const renderDisruptionsList = () => {
        if (severeLineStatuses.length > 0) {
            return severeLineStatuses.map((line, index) => {
                return (
                    <li key={index}>
                        {line.reason}
                    </li>
                )
            })
        }
    }
    const renderDisruptions = () => {
        if (isDisrupted) {
            return (
                <div>
                    <h3>Disruptions:</h3>
                    <ul>
                        {renderDisruptionsList()}
                    </ul>
                </div>
            )
        }
    }
    // console.log(isDisrupted)
    return (
        <div>
            <div>
                <h2>{service.name}</h2>
                <span>{renderDisruptionHeader()}</span>
            </div>
            {renderDisruptions()}
        </div>
    )
}

export default TFLService
