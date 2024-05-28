import React from "react"
import { styled } from "styled-components/native"

const LayoutView = styled.View`
    color: red;
    padding-top: 80px;
    flex: 1;
    position: relative;
    
`

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return( 
        <LayoutView>{children}</LayoutView>
    )
}