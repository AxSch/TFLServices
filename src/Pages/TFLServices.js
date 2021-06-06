import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTransportServices } from '../api/api'
import Menu from '../Components/Menu/Menu'
import TFLService from '../Components/TFLService/TFLService'
import { selectCurrentTFLService, setCurrentTFLService } from '../reducers/transportServices/transportServicesSlice'
import { TFLServicesContainer } from './TFLServices.styled'

const TFLServices = () => {
    const [TFLServiceData, setTFLServiceData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const currentTFLService = useSelector(selectCurrentTFLService)
    const dispatch = useDispatch()

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
        setIsLoading(false)
        dispatch(setCurrentTFLService({}))
    }, [dispatch])

    const renderServices = () => {
        if (isLoading) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <>
                    <div>
                        <Menu services={TFLServiceData} />
                    </div>
                    <div>{currentTFLService && Object.keys(currentTFLService).length > 0 ? <TFLService service={currentTFLService} /> : null}</div>
                </>
            )
        }
    }

    return (
        <TFLServicesContainer>
            {renderServices()}
        </TFLServicesContainer>
    )
}

export default TFLServices
