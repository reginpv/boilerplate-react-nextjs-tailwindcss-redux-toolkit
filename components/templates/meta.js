import Head from 'next/head'
import { SITE_DESCRIPTION, SITE_NAME } from '../../config/constants'

export default function Meta({ title, description }){
  return(
    <Head>

      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <title>{ title ? title.replace(/&amp;/gi, "&" ) : SITE_NAME }</title>
      <meta name="description" content={description || SITE_DESCRIPTION} />

      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>

  )
}