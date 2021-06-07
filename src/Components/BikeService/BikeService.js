import React from 'react'
import { BikeServiceList, BikeServiceContainer, BikeServiceHeader, BikeServiceListItem } from './BikeService.styled'

const BikeService = ({ currentBikeObj, previousBikeObj, isNewSearch }) => {
    const getBikePointID = (bikePoint) => {
        return bikePoint.split('_')[1]
    }

    const renderBikeServiceHeader = () => {
        if (currentBikeObj.bikePointsData && currentBikeObj.bikePointsData.length === 0 && isNewSearch) {
            return (
                <h4>No bike points found for {currentBikeObj.searchTerm} </h4>
            )
        } else if (previousBikeObj.bikePoints && previousBikeObj.bikePoints.length === 0) {
            return <h4>No bike points found for {previousBikeObj.searchTerm} </h4>
        } else {
            return <h4>Results </h4>
        }
    }

    const renderBikePoint = (bikePoints) => {
        return bikePoints.map((bikePoint, index) => {
            return (
                <BikeServiceListItem key={index}>
                    <div>
                        <span>ID: {getBikePointID(bikePoint.id)}</span>
                        <span>{bikePoint.commonName}</span>
                    </div>
                    Location: ({Number(bikePoint.lat).toFixed(2)}, {Number(bikePoint.lon).toFixed(2)})
                </BikeServiceListItem>
            )
        })
    }

    const renderBikePoints = () => {
        if (isNewSearch && currentBikeObj && currentBikeObj.bikePointsData && currentBikeObj.bikePointsData.length > 0) {
            return renderBikePoint(currentBikeObj.bikePointsData)
        } else if (!isNewSearch && previousBikeObj && previousBikeObj.bikePointsData && previousBikeObj.bikePointsData.length > 0) {
            return renderBikePoint(previousBikeObj.bikePointsData)
        }
    }

    return (
        <BikeServiceContainer>
            <BikeServiceHeader>
                {renderBikeServiceHeader()}
            </BikeServiceHeader>
            <BikeServiceList>
                {renderBikePoints()}
            </BikeServiceList>
        </BikeServiceContainer>
    )
}

export default BikeService
