import { 
    fetchTransportServices,
    fetchBikePoints,
} from './api';

describe('fetchTransportServicesAPI', () => {
    it('should call the endpoint & successfully retrieve the services', () => {
        expect.assertions(1)
        return fetchTransportServices().then(res => {
            expect(res.length).toEqual(13)
        })
    }, 3000);
});

describe('fetchBikePointsAPI', () => {
    it('should call the endpoint & successfully retrieve the bike points', () => {
        expect.assertions(1)
        return fetchBikePoints('London').then(res => {
            expect(res.length).toEqual(7)
        })
    }, 3000);
});
