import React, { useEffect, useState } from 'react'
import { animatedScroll as scroll } from 'react-scroll';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer,
        NavLogo, MobileIcon, 
        NavMenu, NavItems, 
        NavLinks, NavBtnLink, 
        NavBtn
} from "./NavbarEl";




const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 0) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    // const toggleHome = () => {
    //     scroll.scrollToTop()
    // };

    return (
       <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/'>  {/*onClick={toggleHome} */}
                        DolladollaBillYoo</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                    <NavItems>
                    <NavLinks 
                            to='about' 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={0}>About</NavLinks>
                    </NavItems>
                    <NavItems>
                    <NavLinks to='discover'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={0}
                            >Discover</NavLinks>
                    </NavItems>
                    <NavItems>
                    <NavLinks 
                     to='services'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={0}
                            >Services</NavLinks>
                    </NavItems>
                    <NavItems>
                    <NavLinks 
                            to='signup'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={0}
                            >SignUp</NavLinks>
                    </NavItems>
                    </NavMenu>
                    <NavBtn>
                    <NavBtnLink to='/signin'>SignIn</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
       </>
    )
}

export default Navbar
