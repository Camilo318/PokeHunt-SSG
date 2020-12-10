import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head >
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
          <title>
            PokeHunt
          </title>
          <link rel="icon" href="/pikachu.svg" type="image/svg" sizes="16x16"></link>
          <link rel="icon" href="/pikachu.svg" type="image/svg" sizes="32x32"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument