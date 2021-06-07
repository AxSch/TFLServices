import React from 'react'
import renderConnected from '../../utils/testHelpers';
import MenuItem from './MenuItem'
import { mockService } from '../TFLService/TFLService.spec'
import registerIcons from '../../App'

const initialState = {
    isSearch: false,
    previousBikeResults: {},
    currentTFLService: {}
}

describe('MenuItem', () => {
    let container, getByTestId, queryByTestId
    registerIcons()
    
    it('should render successfully',  () => {
        const utils = renderConnected(<MenuItem service={mockService} />, { initialState });
        container = utils.container;
        getByTestId = utils.getByTestId;
        expect(getByTestId("menuItem")).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })

    it('should render the night icon - Night travel provided',  () => {
        const utils = renderConnected(<MenuItem service={mockService} />, { initialState });
        container = utils.container;
        getByTestId = utils.getByTestId;
        expect(getByTestId("nightServiceIcon")).toBeInTheDocument();
    })

    it('should render the disruption icon - disruptions on the service',  () => {
        const utils = renderConnected(<MenuItem service={mockService} />, { initialState });
        container = utils.container;
        getByTestId = utils.getByTestId;
        expect(getByTestId("disruptionsIcon")).toBeInTheDocument();
    })
    
    it('should not render the disruption icon - service is good',  () => {
        mockService.lineStatuses = [
            {
                $type: "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                created: "0001-01-01T00:00:00",
                id: 0,
                statusSeverity: 10,
                statusSeverityDescription: "Good Service"
            }
        ]
        const utils = renderConnected(<MenuItem service={mockService} />, { initialState });
        container = utils.container;
        queryByTestId = utils.queryByTestId;
        expect(queryByTestId("disruptionsIcon")).not.toBeInTheDocument();
        expect(queryByTestId("goodSeviceIcon")).toBeInTheDocument();
    })

    it('should not render the night icon - night service is not enabled',  () => {
        mockService.serviceTypes = [
            {
                $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                name: "Regular",
                uri: "/Line/Route?ids=DLR&serviceTypes=Regular"
            }
        ]
        const utils = renderConnected(<MenuItem service={mockService} />, { initialState });
        container = utils.container;
        queryByTestId = utils.queryByTestId;
        expect(queryByTestId("nightServiceIcon")).not.toBeInTheDocument();
    })
})
