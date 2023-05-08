import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainDiv, NavList, StyledNavLink } from './Main.styled';



export const Layout = () => {
    return (
        <MainDiv>
            <NavList>
                <li><StyledNavLink to="/">Home</StyledNavLink></li>
                <li><StyledNavLink to="/tweets">Tweets</StyledNavLink></li>
            </NavList>
            <main>
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
            </main>
        </MainDiv>
    )
}