// @flow

import Wordmark from '../components/Wordmark'
import type { Milestone, TitlesMap, TrackID } from '../constants'
import React from 'react';

type SalaryCalculatorApp = {
    titlesByTrack: TitlesMap,
}

const emptyState = (): SalaryCalculatorAppState => {
    return {

    }
}

type Props = {}

class SalaryCalculatorApp extends React.Component<Props, SalaryCalculatorAppState> {
    constructor(props: Props) {
        super(props)
        this.state = emptyState()
    }
}