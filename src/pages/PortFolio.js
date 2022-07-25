import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/Portfolio/ProjectList';
const PortFolio = () => {
    return (
        <div className='portfolio'>
             <Navigation />
             <ProjectList />
            
        </div>
    );
};

export default PortFolio;