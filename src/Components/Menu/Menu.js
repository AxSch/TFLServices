import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import * as lo from 'lodash'
import { MenuList, MenuSearch, MenuSearchLabel, MenuForm } from './Menu.styled'

const Menu = ({ services, handleSearch, onSubmit }) => {

    const renderMenuItems = () => {
        const sortedServices = lo.sortBy(services, [(service) => service.modeName])
        return sortedServices.map(service => <MenuItem key={service.id} service={service} />)
    }

    return (
        <MenuList>
            {renderMenuItems()}
            <MenuForm onSubmit={(e) => onSubmit(e)}>
                <MenuSearchLabel htmlFor="search">Search for bikes:</MenuSearchLabel>
                <MenuSearch type="search" id="search" placeholder="Search for bike points" onChange={e => handleSearch(e.target.value)} />
            </MenuForm>

        </MenuList>
    )
}

export default Menu
