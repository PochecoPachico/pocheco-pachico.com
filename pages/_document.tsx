import { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentProps } from 'next/document'

export default function Document(props: DocumentProps) {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </body>
    </Html>
  )
} 