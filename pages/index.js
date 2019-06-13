import Head from 'next/head'
import SalaryCalculatorApp from '../components/SalaryCalculatorApp'

export default () => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <title>Convivio's Transparent Salary Calculator</title>
      <link rel="apple-touch-icon-precomposed" href="/static/favicon-152.png"></link>
      <link rel="icon" href="/static/favicon.ico"></link>
      <link rel="stylesheet" href="/static/css/global-styles.css" as="style"></link>
    </Head>
    <SalaryCalculatorApp />
  </div>
)
