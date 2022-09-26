import { Head, Html, Main, NextScript } from "next/document";
import { Body } from "../components/Body";

export default function Document() {
    return (
        <Html>
            <Head/>
            <Body>
                <Main/>
                <NextScript/>
            </Body>
        </Html>
    )
}