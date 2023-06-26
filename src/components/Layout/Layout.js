import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavList, StyledNavLink } from '../../pages/Main.styled';
import { MainDiv} from "../../components/TweetsList/TweetsList.styled"


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