import React, { useEffect, useState } from 'react'
import { fetchTransportServices } from '../api/api'
import { TFLServicesContainer } from './TFLServices.styled'

const TFLServices = () => {
    const [TFLServiceData, setTFLServiceData] = useState({})
    useEffect(() => {
        const fetchTFLServices = async () => {
            const newTFLObj = {}
            const TFLServices = await fetchTransportServices()
            if (TFLServices.length > 0) {
                TFLServices.forEach(service => {
                    newTFLObj[service.id] = service
                })
            }
            setTFLServiceData(newTFLObj)
        }
        fetchTFLServices()
    }, [])
    
    return (
        <TFLServicesContainer>
            <div>
                Menu
            </div>
            <div>Results</div>
        </TFLServicesContainer>
    )
}

export default TFLServices