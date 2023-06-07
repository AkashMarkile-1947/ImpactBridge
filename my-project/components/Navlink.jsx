import { NavLink } from 'react-router-dom';

const navigation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

function NavLinks() {
  return (
    navigation.map((item) => (
      <NavLink
        key={item.name}
        to={item.href}
        activeClassName="bg-gray-900 text-white"
        className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
      >
        {item.name}
      </NavLink>
    ))
  )
}

export default NavLinks;
