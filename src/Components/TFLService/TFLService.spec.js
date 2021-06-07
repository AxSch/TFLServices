import React from 'react'
import { render } from '@testing-library/react';
import TFLService from './TFLService'

const mockService = {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    created: "2021-06-03T11:02:50.87Z",
    crowding: {$type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"},
    disruptions: [],
    id: "london-overground",
    lineStatuses: [
        {
            $type: "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
            created: "0001-01-01T00:00:00",
            disruption: {$type: "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities", category: "PlannedWork", categoryDescription: "PlannedWork", description: "Changes to Stratford to Richmond services on Monda…5:56, 17:08, 18:20, 19:32, 20:47, 22:01 and 23:17", created: "2021-05-07T08:46:00Z"},
            id: 0,
            lineId: "london-overground",
            reason: "Changes to Stratford to Richmond services on Mondays to Fridays from Monday 17 May until Friday 18 June: The following trains from Stratford to Richmond will not run: 06:05, 07:18, 08:30, 09:40, 10:59, 12:14, 13:29, 14:43, 15:52, 17:05, 18:16, 19:29, 20:44, 21:59 and 23:14. The 22:59 is now the last train from Stratford for stations from Willesden Junction to Richmond and Clapham Junction - later trains will run from Stratford as far as Willesden Junction only. The following trains from Richmond to Stratford will not run: 06:08. 07:21, 08:34, 09:47, 11:01, 12:17, 13:31, 14:45, 15:56, 17:08, 18:20, 19:32, 20:47, 22:01 and 23:17",
            statusSeverity: 7,
            statusSeverityDescription: "Reduced Service",
            validityPeriods: [{}]
        }
    ],
    modeName: "overground",
    modified: "2021-06-03T11:02:50.87Z",
    name: "London Overground",
    routeSections: [{}, {}, {}, {}],
    serviceTypes: [
        {
            $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
            name: "Regular",
            uri: "/Line/Route?ids=London Overground&serviceTypes=Regular"
        },
        {
            $type: "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
            name: "Night",
            uri: "/Line/Route?ids=London Overground&serviceTypes=Night"
        }
    ]
}

describe('TFLService', () => {
    let container, getByTestId

    it('should render successfully', () => {
        const utils = render(<TFLService service={mockService} />);
        container = utils.container;
        getByTestId = utils.getByTestId;
        expect(getByTestId("tflService")).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should render the list of disruptions', () => {
        const utils = render(<TFLService service={mockService} />);
        container = utils.container;
        getByTestId = utils.getByTestId;
        expect(getByTestId("disruptionsList")).toBeInTheDocument();
        expect(getByTestId("disruptionsList").children).toHaveLength(1);
    });
    
    it('should render correct disruption copy - disruptions exist', () => {
        const utils = render(<TFLService service={mockService} />);
        container = utils.container;
        getByTestId = utils.getByTestId;
        expect(getByTestId("hasDisruptions")).toBeInTheDocument();
        expect(getByTestId("hasDisruptions").textContent).toEqual('Service is currently suffering disruptions');
    });
    
    
    it('should render correct disruption copy - disruptions do not exist', () => {
        mockService.lineStatuses = []
        const utils = render(<TFLService service={mockService} />);
        container = utils.container;
        getByTestId = utils.getByTestId;
        expect(getByTestId("noDisruptions")).toBeInTheDocument();
        expect(getByTestId("noDisruptions").textContent).toEqual('No service disruptions');
    });

})
