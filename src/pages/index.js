import * as React from 'react';
import PersistentDrawerLeft from '../components/sidenav';
import MediaCard from '../components/flipcard';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ResponsiveDialog from '../components/definitiondialog';

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
const wordDef = {
  fontSize: '20px', 
  color: '#660099'
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        What is a City Challenge?
        <br />
        <h2 style={rightBlurbs}>
        A City Challenge is a public engagement model in which city leaders and officials work with residents to identify, design and implement resident-designed solutions to some of the city’s most pressing problems.                                                    
        <h3 style={rightBlurbs}></h3>
        The goal of a City Challenge is to help a city transition from closed-door to open and <ResponsiveDialog props={{word: 'collaborative governance', def: 'A process involving state and non-state actors jointly addressing an issue.'}} textStyles={wordDef}></ResponsiveDialog>, and helps governments and communities <ResponsiveDialog props={{word: 'co-create', def: 'A form of collaborative innovation: ideas are shared and improved together.'}} textStyles={wordDef}></ResponsiveDialog> implementable solutions to critical local problems in twelve months through a 4-step process. 
        <h4 style={rightBlurbs}></h4>
        Unlike a competition alone, problem definition and coaching ensures that solutions are implementable. And, unlike a database of standard solutions, <ResponsiveDialog props={{word: 'open innovation', def: 'The process of pooling knowledge and resources with a community of partners to accelerate innovation.'}} textStyles={wordDef}></ResponsiveDialog> daws upon the expertise of the community. 
        </h2>
      </h1>


      <div classname = 'grid-container-element'>
        <div classname = 'child'>
          <MediaCard props={{title: 'PROBLEM DEFINITION', desc: 'Training for public servants in defining problems with data and evidence'}}></MediaCard>
        </div>
        <div classname = 'child'>
          <TrendingFlatIcon sx={{transform: 'scale(2)'}}/>
        </div>
        <div classname = 'child'>
        <MediaCard props={{title: 'OPEN CHALLENGE', desc: 'Training for public servants in defining problems with data and evidence'}}></MediaCard>
        </div>
        <div classname = 'child'>
        <TrendingFlatIcon sx={{transform: 'scale(2)'}}/>
        </div>
        <div classname = 'child'>
        <MediaCard props={{title: 'CO-DESIGN', desc: 'A coaching program for residents and public servants to develop those solutions collaboratively'}}></MediaCard>
        </div>
        <div classname = 'child'>
        <TrendingFlatIcon sx={{transform: 'scale(2)'}}/>
        </div>
        <div classname = 'child'>
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
