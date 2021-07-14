import React from 'react';
import resume from '../../img/resume.pdf';

export default function About() {
  return (
    <div>
      <h1>Resume</h1>
      <p>Click on a project to learn more, or check out my <a href={resume} target="_blank">resume</a></p>
    </div>
  );
}
