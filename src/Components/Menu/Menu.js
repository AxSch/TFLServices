import React from 'react'
import MenuItem from '../MenuItem/MenuItem'

const Menu = ({ services }) => {
    const renderMenuItems = () => {
        return Object.keys(services).map(service => {
            return (
                <div key={service}>
                    <MenuItem service={services[service]}></MenuItem>
                </div>
            )
        })
    }
    return (
        <ul>
            {renderMenuItems()}
        </ul>
    )
}

export default Menu 
