import Link from 'next/link';
import React from 'react';

const Navbar = () => {

  const menuItems = [
    { name: `Home`, path: `/` },
    { name: `Create Account`, path: `/account` },
    { name: `Login`, path: `/login` },
  ];

  const menu = menuItems.map((item, index) => {
    return (
      <li key={index} className="text-white px-3 py-2 rounded-md text-sm font-medium md:text-lg">
        <Link href={item.path}>
          {item.name}
        </Link>
      </li>
    )
  })

  return (
    <div>
      <header className="bg-blue-500  w-full "> 
          <nav>
            <ul className="flex space-x-4 md:space-x-6">
              {menu}
            </ul>
          </nav>
      </header>
    </div>
  )
}

export default Navbar;
