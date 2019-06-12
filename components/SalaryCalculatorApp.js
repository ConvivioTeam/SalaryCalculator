// @flow

import TitleSelector from '../components/TitleSelector'
import Wordmark from '../components/Wordmark'
import type { Milestone, TitlesMap, TrackID } from '../constants'
import React from 'react';
import { titleLevels } from '../constants';
import SalaryDisplay from './SalaryDisplay';

type SalaryCalculatorAppState = {
    titlesByTrack: TitlesMap,
    title: string,
    level: number
}

const hashToState = (hash: String): ?SalaryCalculatorAppState => {
    if (!hash) return null
    const result = defaultState()
    const hashValues = hash.split('#')[1].split(',')
    if (!hashValues) return null
    trackIds.forEach((trackId, i) => {
      result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]))
    })
    if (hashValues[16]) result.name = decodeURI(hashValues[16])
    if (hashValues[17]) result.title = decodeURI(hashValues[17])
    return result
  }

const emptyState = (): SalaryCalculatorAppState => {
    return {
        title: '',
        level: 1
    }
}
const defaultState = (): SalaryCalculatorAppState => {
    return {
      title: 'Staff Developer',
      level: 2
    }
}

const stateToHash = (state: SalaryCalculatorAppState) => {
    if (!state || !state.milestoneByTrack) return null
    const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURI(state.name), encodeURI(state.title))
    return values.join(',')
  }
  
type Props = {}

class SalaryCalculatorApp extends React.Component<Props, SalaryCalculatorAppState> {
    constructor(props: Props) {
        super(props)
        this.state = emptyState()
    }

    componentDidUpdate() {
        const hash = stateToHash(this.state)
        if (hash) window.location.replace(`#${hash}`)
    }

    componentDidMount() {
        const state = hashToState(window.location.hash)
        if (state) {
        this.setState(state)
        } else {
        this.setState(defaultState())
        }
    }

    setTitle(title: string) {
        this.setState({ title })
        // this.setLevel(title )
    }

    setLevel(title: string) {
        const level = titleLevels.get(title)
        this.setState({ level })
    }

    render() {
        return (
            <main>
                <style jsx global>{`
                    body {
                        font-family: Helvetica;
                    }
                    main {
                        width: 960px;
                        margin: 0 auto;
                    }
                    .name-input {
                        border: none;
                        display: block;
                        border-bottom: 2px solid #fff;
                        font-size: 30px;
                        line-height: 40px;
                        font-weight: bold;
                        width: 380px;
                        margin-bottom: 10px;
                    }
                    .name-input:hover, .name-input:focus {
                        border-bottom: 2px solid #ccc;
                        outline: 0;
                    }
                    a {
                        color: #888;
                        text-decoration: none;
                    }
                    .title-text {
                        font-size: 20px;
                        line-height: 20px;
                        margin-bottom: 20px;
                        min-width: 300px;
                    }
                `}</style>
                <div style={{margin: '19px auto 0', width: 210}}>
                    <a href="https://www.weareconvivio.com/" target="_blank">
                        <Wordmark />
                    </a>
                </div>
                <h1 dangerouslySetInnerHTML={{__html: "Convivio's Transparent Salary Calculator"}}></h1>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}}>
                    <form>
                        <div className="title-text">
                            <span dangerouslySetInnerHTML={{__html: "I'm a"}}></span>&nbsp;
                            <TitleSelector
                                currentTitle={this.state.title}
                                setTitleFn={(title) => this.setTitle(title)}
                                setLevelFn={(title) => this.setLevel(title)} />
                        </div>
                        <div className="title-text" dangerouslySetInnerHTML={{__html: "At Convivio I'd earn … "}}></div>
                    </form>
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}}>
                        <SalaryDisplay
                            currentLevel={this.state.level} />
                    </div>
                </div>
            </main>
        )
    }
}

export default SalaryCalculatorApp