import React from 'react';

const OtherSkills = () => {
    return (
          <div className='otherSkills'>
            <h3>Autres compétences</h3>
            <div className='list'>
              <ul>
                <li><i className='fas fa-check square'>Anglais courant</i></li>
                <li><i className='fas fa-check square'>GitHub</i></li>
                <li><i className='fas fa-check square'>SEO</i></li>
                <li><i className='fas fa-check square'>Methode agiles</i></li>
              </ul>

              <ul>
                <li><i className='fas fa-check square'>Figma</i></li>
                <li><i className='fas fa-check square'>UI/UX Desing</i></li>
                <li><i className='fas fa-check square'>Photosop</i></li>
                <li><i className='fas fa-check square'>Montage vidéo</i></li>
              </ul>

            </div>
          </div> 
    );
};

export default OtherSkills;