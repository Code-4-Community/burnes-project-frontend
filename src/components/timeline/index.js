import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import PhaseCard from '../phasecards';

export default function PhaseTimeline() {
  return (
    <Timeline sx={{ rotate: '90deg' }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <PhaseCard title={'Phase 1'} desc={'Problem Definition'}>
          {' '}
        </PhaseCard>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <PhaseCard title={'Phase 2'} desc={'Open Challenge'}>
          {' '}
        </PhaseCard>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <PhaseCard title={'Phase 3'} desc={'Co-Design'}>
          {' '}
        </PhaseCard>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <PhaseCard title={'Phase 4'} desc={'Implementation'}>
          {' '}
        </PhaseCard>
      </TimelineItem>
    </Timeline>
  );
}
