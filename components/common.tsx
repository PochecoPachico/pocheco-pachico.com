import Head from 'next/head'

interface CommonProps {
  title?: string;
}

export default function Common({ title = "田んぼ" }: CommonProps) {
  let description = "WEB開発、IT技術、ランニング、たまにゲームに関する技術を書いていきます。"
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      {/* <meta property="og:image" content={`${process.env.SITE_URL}/ogp_large.png`} /> */}
      {/* <meta name="twitter:card" content="summary_large_image"/> */}
    </Head>
  )
} 