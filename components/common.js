import Head from 'next/head'

export default function Common({ title = "田んぼ", description = "ぽちぇこの備忘録" }) {

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.SITE_URL}/ogp_large.png`} />
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
  )
}