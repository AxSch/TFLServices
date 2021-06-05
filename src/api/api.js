

const fetchTransportServices = async () => {
    try {
        const transportServices = await fetch('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
        const data = await transportServices.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchBikePoints = async (query) => {
    try {
        const bikePoints = await fetch(`https://api.tfl.gov.uk/BikePoint/Search?query=${query}`)
        const data = await bikePoints.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export {
    fetchTransportServices,
    fetchBikePoints
}
