import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTransportServices, fetchBikePoints } from '../api/api'
import BikeService from '../Components/BikeService/BikeService'
import Menu from '../Components/Menu/Menu'
import TFLService from '../Components/TFLService/TFLService'
import { 
    selectCurrentTFLService,
    setCurrentTFLService,
    setPreviousResults, 
    selectPreviousBikeResults,
    setIsSearch,
    selectIsSearch
 } from '../reducers/transportServices/transportServicesSlice'
import { TFLServicesContainer } from './TFLServices.styled'

const TFLServices = () => {
    const [TFLServiceData, setTFLServiceData] = useState({})
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isNewSearch, setIsNewSearch] = useState(false)
    const [bikePoints, setBikePoints] = useState({})
    const currentTFLService = useSelector(selectCurrentTFLService)
    const previousBikeSearch = useSelector(selectPreviousBikeResults)
    const isSearch = useSelector(selectIsSearch)
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
        dispatch(setIsSearch(false))
        dispatch(setCurrentTFLService({}))
    }, [dispatch])

    const handleSearch = (value) => {
        setSearchTerm(value)
    }

    const fetchTFLBikes = async (query) => {
        const bikePointsData = await fetchBikePoints(query)
        const bikeSearchObj = {
            searchTerm: query,
            bikePointsData
        }

        setBikePoints(bikeSearchObj)
        dispatch(setPreviousResults(bikeSearchObj))
    }

    const submitSearch = (e) => {
        e.preventDefault()
        if (previousBikeSearch.searchTerm !== searchTerm) {
            setIsNewSearch(true)
            fetchTFLBikes(searchTerm)
        } else {
            setIsNewSearch(false)
        }

        dispatch(setIsSearch(true))
    }

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
                    <Menu services={TFLServiceData} handleSearch={handleSearch} onSubmit={submitSearch} />
                    {currentTFLService && Object.keys(currentTFLService).length > 0 && !isSearch ? <TFLService service={currentTFLService} /> : null}
                    {isSearch ? <BikeService currentBikeObj={bikePoints} previousBikeObj={previousBikeSearch} isNewSearch={isNewSearch} /> : null}

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
