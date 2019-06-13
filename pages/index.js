import Head from 'next/head'
import SalaryCalculatorApp from '../components/SalaryCalculatorApp'

export default () => (
  <div>
    <Head>
      <title>Convivio's Transparent Salary Calculator</title>
      <link rel="apple-touch-icon-precomposed" href="/static/favicon-152.png"></link>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <SalaryCalculatorApp />
  </div>
)
