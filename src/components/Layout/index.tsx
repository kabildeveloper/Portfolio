import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
    children: string | React.JSX.Element | React.JSX.Element[]
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}