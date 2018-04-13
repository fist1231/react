import moment from 'moment'

export default [
  {
    id: 0,
    title: '2018CP4SMP Proposals Due',
    allDay: true,
    start: moment().add(5,'days').toDate(),
    end: moment().add(6,'days').toDate(),
  },
  {
    id: 1,
    title: 'Solicitation: NNH008ZDA011L Release',
    start: moment().subtract(12,'days').toDate(),
    end: moment().subtract(9,'days').toDate(),
  },

  {
    id: 2,
    title: 'IGCCE Proposals Due',
    start: moment().subtract(2,'days').toDate(),
    end: moment().subtract(2,'days').toDate(),
  },

  {
    id: 3,
    title: 'Solicitation: NNH11ZHA004N Selection',
    start: moment().add(3,'days').toDate(),
    end: moment().add(3,'days').toDate(),
  },

  {
    id: 4,
    title: 'Solicitation: NNS18459560R Release',
    start: moment().add(6,'days').toDate(),
    end: moment().add(6,'days').toDate(),
  },
  {
    id: 5,
    title: 'NSPIRES Maintenance',
    start: moment().add(13,'days').set({'hour': 7, 'minute':0, 'second':0}).toDate(),
    end: moment().add(13,'days').set({'hour': 9, 'minute':30, 'second':0}).toDate(),
    desc: 'NSPIRES Website will be down for scheduled maintenance',
  },
  {
    id: 6,
    title: 'SMDSS18 Single Source Proposals Due',
    start: moment().add(10,'days').set({'hour': 6, 'minute':30, 'second':0}).toDate(),
    end: moment().add(10,'days').set({'hour': 7, 'minute':30, 'second':0}).toDate(),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'EPSCoR RID Proposals Due',
    start: moment().add(10,'days').set({'hour': 8, 'minute':0, 'second':0}).toDate(),
    end: moment().add(10,'days').set({'hour': 8, 'minute':30, 'second':0}).toDate(),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'NUP2018 Proposals Due',
    start: moment().add(10,'days').set({'hour': 9, 'minute':0, 'second':0}).toDate(),
    end: moment().add(10,'days').set({'hour': 9, 'minute':30, 'second':0}).toDate(),
  },
  {
    id: 9,
    title: 'Solicitation: NNH18ZHA003C Release',
    start: moment().add(10,'days').set({'hour': 10, 'minute':0, 'second':0}).toDate(),
    end: moment().add(10,'days').set({'hour': 10, 'minute':30, 'second':0}).toDate(),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Solicitation: NNH18ZDA001N-ATP Close',
    start: moment().add(10,'days').set({'hour': 11, 'minute':0, 'second':0}).toDate(),
    end: moment().add(10,'days').set({'hour': 11, 'minute':30, 'second':0}).toDate(),
  },
  {
    id: 11,
    title: 'Proposal: ATP Due',
    start: moment().add(29,'days').toDate(),
    end: moment().add(30,'days').toDate(),
  },
  {
    id: 12,
    title: 'NNH18ZDB003N Selections',
    start: moment().add(36,'days').toDate(),
    end: moment().add(36,'days').toDate(),
  },
  {
    id: 13,
    title: 'NNH18NNA005N Award Date',
    start: moment().subtract(30,'days').toDate(),
    end: moment().subtract(30,'days').toDate(),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
]
