import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import {GA} from '../components/GA'

export default class Document extends NextDocument {
  render() {
    return (
        <Html style={{ scrollBehavior: "smooth" }}>
            <Head />
            <body>
                {/* Make Color mode to persists when you refresh the page. */}
                <ColorModeScript />
                <Main />
                <NextScript />
                <GA />
            </body>
        </Html>
    );
  }
}
