// @flow

import React from 'react'
import { trackTitles, titleLevels, tracks } from '../constants'
// import type { MilestoneMap } from '../constants'

var optgroupLabel = null

type Props = {
  currentTitle: String,
  setTitleFn: (string) => void,
  setLevelFn: (string) => void
}

class TitleSelector extends React.Component {

  render() {
    const selectorTrackTitles = Array.from(trackTitles.entries())
    const trackMilestoneTitle = null
    return <select value={this.props.currentTitle} onChange={e => { this.props.setTitleFn(e.target.value); this.props.setLevelFn(e.target.value); } }>
      <style jsx>{`
        select {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 20px;
          min-width: 300px;
        }
      `}</style>
      {selectorTrackTitles.map(trackMilestoneTitles => {
        const trackMilestoneTitle = trackMilestoneTitles[0]
        return (
        trackMilestoneTitles[1].length > 0 ?
          <optgroup key={trackMilestoneTitles[0]} label={trackMilestoneTitles[0]}>
            {Array.from(trackMilestoneTitles[1]).map((milestoneTitles) => (
              milestoneTitles['titles'] !== undefined ?
              milestoneTitles['titles'].map(title => (
                <option key={trackMilestoneTitle + "-" + title}>
                  {title}
                </option>
              )) : null
            ))}
          </optgroup>
          : null
        )
      })}
    </select>
  }
}

export default TitleSelector