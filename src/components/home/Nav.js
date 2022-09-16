import React from 'react'

const Nav = ({navItems}) => {
    return (
        <nav>
            <ul className='grid-col nav-ul'>
                {navItems.map((item, b) => <li key={b}><a href={item.ref}>{item.item}</a></li>)}
            </ul>
        </nav>
    )
}

export default Nav