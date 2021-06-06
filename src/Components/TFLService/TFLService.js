import React, { useState, useEffect } from 'react'
import { TFLServiceContainer, ServiceHeader, ServiceDisruptions, ServiceDisruptionsList, DisruptionsListItem } from './TFLService.styled'

const TFLService = ({ service }) => {
    const [isDisrupted, setIsDisrupted] = useState(false)
    const severeLineStatuses = service.lineStatuses.filter(line => line.statusSeverity !== 10)

    useEffect(() => {
        if (severeLineStatuses.length > 0) {
            if (severeLineStatuses[0].statusSeverity !== 10) {
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
                    <DisruptionsListItem key={index}>
                        {line.reason}
                    </DisruptionsListItem>
                )
            })
        }
    }

    const renderDisruptions = () => {
        if (isDisrupted) {
            return (
                <ServiceDisruptions>
                    <h3>Disruptions:</h3>
                    <ServiceDisruptionsList>
                        {renderDisruptionsList()}
                    </ServiceDisruptionsList>
                </ServiceDisruptions>
            )
        }
    }

    return (
        <TFLServiceContainer>
            <ServiceHeader>
                <h2>{service.name}</h2>
                {renderDisruptionHeader()}
            </ServiceHeader>
            {renderDisruptions()}
        </TFLServiceContainer>
    )
}

export default TFLService
