import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainDiv, StyledNavLink } from './Main.styled';



export const Layout = () => {
    return (
        <MainDiv>
            <ul>
                <li><StyledNavLink to="/">Home</StyledNavLink></li>
                <li><StyledNavLink to="/tweets">Tweets</StyledNavLink></li>
            </ul>
            <main>
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
            </main>
        </MainDiv>
    )
}