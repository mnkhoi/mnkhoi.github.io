import { FC } from 'react'
import React from 'react'
import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, navigationMenuTriggerStyle } from './ui/navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import { Button } from './ui/button';

interface NavBarProps {
  name?: string;
  logo: string;
}

const NavBar: FC<NavBarProps> = ({ logo, name }) => {
  return (
  <div className='flex flex-row justify-between align-middle w-full'>
    <Logo name='Khoi Nguyen'/>

    <div className="right flex gap-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#about">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                about
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#work">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                work
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#contact">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button > <Link href='/resume'> resume </Link></Button>
    </div>
  </div>
  );
}

export default NavBar
