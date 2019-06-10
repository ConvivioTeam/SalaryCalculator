// @flow

import TitleSelector from '../components/TitleSelector'
import Wordmark from '../components/Wordmark'
import type { Milestone, TitlesMap, TrackID } from '../constants'
import React from 'react';

type SalaryCalculatorAppState = {
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
                `}</style>
                <div style={{margin: '19px auto 0', width: 210}}>
                    <a href="https://www.weareconvivio.com/" target="_blank">
                        <Wordmark />
                    </a>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}}>
                    <form>
                        <TitleSelector
                            milestoneByTrack={this.state.milestoneByTrack}
                            currentTitle={this.state.title}
                            setTitleFn={(title) => this.setTitle(title)} />
                    </form>
                    </div>
                </div>
            </main>
        )
    }
}

export default SalaryCalculatorApp