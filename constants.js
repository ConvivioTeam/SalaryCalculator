// @flow
import * as d3 from 'd3'

export type TrackId = 'BACKEND' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'USERS' |
  'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |'CAREER_DEVELOPMENT' | 
  'AMBASSADORSHIP' | 'RECRUITING' | 'COMMUNITY' | 'KNOWLEDGE'

export type Milestone = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type TitlesMap = {
    'BACKEND': {
        1: { "Developer", "Engineer" },
        2: { "Staff Developer", "Staff Engineer" }
    },
    'WEB_CLIENT': {},
    'FOUNDATIONS': {},
    'SERVERS': {},
    'PROJECT_MANAGEMENT': {},
    'COMMUNICATION': {},
    'CRAFT': {},
    'USERS': {},
    'ORG_DESIGN': {},
    'WELLBEING': {},
    'ACCOMPLISHMENT': {},
    'CAREER_DEVELOPMENT': {},
    'AMBASSADORSHIP': {},
    'RECRUITING': {},
    'COMMUNITY': {},
    'KNOWLEDGE': {}
}