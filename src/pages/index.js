import * as React from 'react';
import PersistentDrawerLeft from '../components/sidenav';
import MediaCard from '../components/flipcard';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 800,
};
const rightBlurbs = {
  position: 'relative',
  left: '525px',
  top: '-30px',
  fontSize: '20px',
  color: '#660099',
};

const phaseCardsContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '20px'
};


const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        What is a City Challenge?
        <br />
        <h2 style={rightBlurbs}>
        A City Challenge is a public engagement model in which city leaders and officials work with residents to identify, design and implement resident-designed solutions to some of the city’s most pressing problems.                                                    
        <h3 style={rightBlurbs}></h3>
        The goal of a City Challenge is to help a city transition from closed-door to open and collaborative governance, and helps governments and communities co-create implementable solutions to critical local problems in twelve months through a 4-step process. 
        <h4 style={rightBlurbs}></h4>
        Unlike a competition alone, problem definition and coaching ensures that solutions are implementable. And, unlike a database of standard solutions, open innovation daws upon the expertise of the community. 
        </h2>
      </h1>

      <div style={phaseCardsContainer}>
        <div classname = 'phase-card'>
          <MediaCard props={{title: 'PROBLEM DEFINITION', desc: 'Training for public servants in defining problems with data and evidence'}}></MediaCard>
        </div>
        <div classname = 'phase-card'>
          <TrendingFlatIcon sx={{transform: 'scale(2)'}}/>
        </div>
        <div classname = 'phase-card'>
        <MediaCard props={{title: 'OPEN CHALLENGE', desc: 'Training for public servants in defining problems with data and evidence'}}></MediaCard>
        </div>
        <div classname = 'phase-card'>
        <TrendingFlatIcon sx={{transform: 'scale(2)'}}/>
        </div>
        <div classname = 'phase-card'>
        <MediaCard props={{title: 'CO-DESIGN', desc: 'A coaching program for residents and public servants to develop those solutions collaboratively'}}></MediaCard>
        </div>
        <div classname = 'phase-card'>
        <TrendingFlatIcon sx={{transform: 'scale(2)'}}/>
        </div>
        <div classname = 'phase-card'>
        <MediaCard props={{title: 'IMPLEMENTATION', desc: 'Support for cities to implement the innovative new policy or service'}}></MediaCard>
        </div>
      </div>
      

      <PersistentDrawerLeft></PersistentDrawerLeft>
      <img
        alt="Gov Lab Logo"
        src="/images/govlablogo.png"
        width="24"
        height="24"
      ></img>
    </main>
  );
};

export default IndexPage;



export const Head = () => <title>Home Page</title>;
