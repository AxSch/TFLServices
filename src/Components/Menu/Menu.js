import React, { useEffect } from 'react'
import MenuItem from '../MenuItem/MenuItem'
import * as lo from 'lodash'
import { MenuList } from './Menu.styled'

const Menu = ({ services }) => {
    useEffect(() => {

    })
    const renderMenuItems = () => {
        const sortedServices = lo.sortBy(services,[(service) => service.modeName ])
        return sortedServices.map(service => <MenuItem key={service.id} service={service} />)
    }

    return (
        <MenuList>
            {renderMenuItems()}
        </MenuList>
    )
}

export default Menu 
