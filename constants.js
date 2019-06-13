// @flow
import * as d3 from 'd3'

export type TrackId = 'BACKEND' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'QUALITY' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'USERS' |
  'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |'CAREER_DEVELOPMENT' | 
  'AMBASSADORSHIP' | 'RECRUITING' | 'COMMUNITY' | 'KNOWLEDGE'

export type Milestone = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type MilestoneMap = {
  'BACKEND': Milestone,
  'WEB_CLIENT': Milestone,
  'FOUNDATIONS': Milestone,
  'QUALITY': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'USERS': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'AMBASSADORSHIP': Milestone,
  'RECRUITING': Milestone,
  'COMMUNITY': Milestone,
  'KNOWLEDGE': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5, 6]

export const salaryLevels = {
  1 : {
    1 : '33000',
    2 : '33750',
    3 : '34500'
  },
  2 : {
    1 : '38000',
    2 : '39000',
    3 : '40000'
  },
  3 : {
    1 : '44000',
    2 : '45000',
    3 : '46250'
  },
  4 : {
    1 : '51500',
    2 : '52750',
    3 : '54000'
  },
  5 : {
    1: '60750',
    2 : '62250',
    3 : '63750'
  },
  6 : {
    1 : '72250',
    2 : '74000',
    3: '75750'
  }
}

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  milestones: {
    titles: string[]
  }[]
}

type Tracks = {|
  'BACKEND': Track,
  'WEB_CLIENT': Track,
  'FOUNDATIONS': Track,
  'QUALITY': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'USERS': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'AMBASSADORSHIP': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
    'BACKEND': {
      "displayName": "Backend",
      "category": "Building",
      "milestones": [{
        "titles": [ "Developer", "Engineer" ]
      }, {
        "titles": [ "Staff Developer", "Staff Engineer" ]
      }, {
        "titles": [ "Senior Developer", "Senior Engineer", "Engineering Manager" ]
      }, {
        "titles": [ "Lead Developer", "Lead Engineer", "Senior Engineering Manager" ]
      }, {
        "titles": [ "Principle Developer", "Principle Engineer", "Head of Development", "Principle Engineering Manager" ]
      }, {
        "titles": [ "Technical Director", "Chief Technical Officer (CTO)" ]
      }]
    },
    'WEB_CLIENT': {
      "displayName": "Web Client",
      "category": "Building",
      "milestones": [{
        "titles": [ "Frontend Developer", "Designer" ]
      }, {
        "titles": [ "Staff Frontend Developer", "Staff Designer" ]
      }, {
        "titles": [ "Senior Frontend Developer", "Senior Designer", "Design Manager" ]
      }, {
        "titles": [ "Lead Frontend Developer", "Lead Designer", "Senior Design Manager" ]
      },{
        "titles": [ "Principle Frontend Developer", "Principle Designer", "Principle Design Manager" ]
      }, {
        "titles": [ "Technical Director", "Head of Design" ]
      }]
    },
    'FOUNDATIONS': {
      "displayName": "Foundations",
      "category": "Building",
      "milestones": [{
        "titles": [ "DevOps Engineer", "Data Engineer" ]
      }, {
        "titles": [ "Staff DevOps Engineer", "Staff Data Engineer" ]
      }, {
        "titles": [ "Senior DevOps Engineer", "Senior Data Engineer", "DevOps Manager" ]
      }, {
        "titles": [ "Lead DevOps Engineer", "Lead Data Engineer", "Data Architect", "Senior DevOps Manager" ]
      }, {
        "titles": [ "Principle DevOps Engineer", "Principle Data Engineer", "Senior Data Architect	Principle DevOps Manager" ]
      }, {
        "titles": [ "Head of DevOps", "Technical Director" ]
      }]
    },
    'QUALITY': {
      "displayName": "Quality",
      "category": "Building",
      "milestones": [{
        "titles": [ "Security Engineer", "Quality Analyst" ]
      }, {
        "titles": [ "Staff Security Engineer", "Staff Quality Analyst" ]
      }, {
        "titles": [ "Senior Security Engineer", "Senior Quality Analyst", "Quality Manager" ]
      }, {
        "titles": [ "Lead Security Engineer", "Lead Quality Analyst", "Test Architect", "Senior Quality Manager" ]
      }, {
        "titles": [ "Principle Security Engineer", "Principle Quality Analyst", "Senior Test Architect", "Principle Quality Manager" ]
      }, {
        "titles": [ "Head of Data Security", "Head of Quality Assurance", "Technical Director" ]
      }]
    },
    'PROJECT_MANAGEMENT': {
      "displayName": "Project Management",
      "milestones": [{
        "titles": [ "Project Mananger", "Project Coordinatior", "Project Scheduler" ]
      }, {
        "titles": [ "Staff Project Manager", "Assistant Project Mananger", "Delivery Manager" ]
      }, {
        "titles": [ "Senior Project Mananger", "Senior Delivery Manager" ]
      }, {
        "titles": [ "Lead Project Mananger", "Lead Operations Manager", "Lead Delivery Manager" ]
      }, {
        "titles": [ "Principle Project Mananger", "Principle Operations Manager", "Head of Program/Project", "Project Director" ]
      }, {
        "titles": [ "Operations Director", "Chief Project Officer" ]
      }]
    },
    'COMMUNICATION': {
      "displayName": "Communication",
      "milestones": []
    },
    'CRAFT': {
      "displayName": "Craft",
      "milestones": []
    },
    'USERS': {
      "displayName": "Users",
      "milestones": [{
        "titles": [ "UX Designer", "UX Researcher" ]
      }, {
        "titles": [ "Staff UX Designer", "Staff UX Researcher" ]
      }, {
        "titles": [ "Senior UX Designer", "Senior UX Researcher", "UX Manager" ]
      }, {
        "titles": [ "Lead UX Designer", "Lead UX Researcher", "Lead UX Manager" ]
      }, {
        "titles": [ "Principle UX Designer", "Princple UX Researcher", "Principle UX Manager" ]
      }, {
        "titles": [  ]
      }]
    },
    'ORG_DESIGN': {
      "displayName": "Organisation Design",
      "milestones": [{
        "titles": []
      }, {
        "titles": [ "Operations Analyst" ]
      }, {
        "titles": [ "Operations Manager" ]
      }, {
        "titles": [ "Business Development Manager" ]
      }, {
        "titles": []
      }, {
        "titles": []
      }]
    },
    'WELLBEING': {
      "displayName": "Wellbeing",
      "milestones": []
    },
    'ACCOMPLISHMENT': {
      "displayName": "Accomplishment",
      "milestones": []
    },
    'CAREER_DEVELOPMENT': {
      "displayName": "Career Development",
      "milestones": []
    },
    'AMBASSADORSHIP': {
      "displayName": "Ambassadorship",
      "milestones": [{
        "titles": []
      }, {
        "titles": []
      }, {
        "titles": []
      }, {
        "titles": []
      }, {
        "titles": []
      }, {
        "titles": [ "Chief Executive Officer (CEO)", "Managing Director" ]
      }
      ]
    },
    'RECRUITING': {
      "displayName": "Recruiting",
      "milestones": []
    },
    'COMMUNITY': {
      "displayName": "Community",
      "milestones": []
    },
    'KNOWLEDGE': {
      "displayName": "Knowledge",
      "milestones": []
    }
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const trackTitles: Map<string> = trackIds.reduce((map, trackId) => {
  map.set(tracks[trackId].displayName, tracks[trackId].milestones)
  return map
}, new Map())

export const titleLevels: Map<string> = trackIds.reduce((map, trackId) => {
  tracks[trackId].milestones.map((milestone, milestoneId) => (
    milestone['titles'].map(title => {
      map.set(title, milestoneId + 1)
    })
  ))
  return map
}, new Map())

