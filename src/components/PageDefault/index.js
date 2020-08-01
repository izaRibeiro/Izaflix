import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled, { css } from 'styled-components';

const Main = styled.main`
    background-color: var(--backgroundHome);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    padding: 0;
`;

function PageDefault(props){
    return (
        <>
            <Menu />
                <Main>
                    {props.children}
                </Main>
            <Footer />
        </>
    )
}

export default PageDefault;