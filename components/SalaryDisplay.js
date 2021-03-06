// @flow

import React from 'react'
import { salaryLevels } from '../constants'
import CurrencyFormat from 'react-currency-format'

type Props = {
    currentLevel: Number
}

var salaryLow = 0
var salaryHigh = 0

class SalaryDisplay extends React.Component {
    constructor(props: Props) {
      super(props)
    }

    render() {
      this.salaryLow = salaryLevels[this.props.currentLevel][1]
      this.salaryHigh = salaryLevels[this.props.currentLevel][3]
        return (
            <div>
                <style jsx>{`
                    p.salary {
                    font-size: 30px;
                    line-height: 30px;
                    margin-bottom: 20px;
                    min-width: 300px;
                    text-align: center;
                    }
                    p.sub {
                        margin-top: 20px;
                        font-size: 20px;
                    }
                `}</style>
                <p className="salary">
                    <span>… from</span>
                    &nbsp;
                    <CurrencyFormat value={this.salaryLow} displayType={'text'} thousandSeparator={true} prefix={'£'}></CurrencyFormat>
                    &nbsp;
                    <span>to</span>
                    &nbsp;
                    <CurrencyFormat value={this.salaryHigh} displayType={'text'} thousandSeparator={true} prefix={'£'}></CurrencyFormat>
                </p>
                <p className="salary sub">
                    depending on skills and capabilities.
                </p>
            </div>
        )
    }   
}

export default SalaryDisplay