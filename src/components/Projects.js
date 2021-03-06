import React, { useState, useRef, useEffect } from "react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Latest works</h2>
      <article>
        <img src="" alt="" />
        <div>
          <h3>name of project</h3>
          <p>brief description mentioning the technologies used</p>
          <button className="button">view project</button>
        </div>
        {/* inside each article split it 50/50 with the image. with the image toggling from LHS to RHS with each project */}
      </article>
    </section>
  );
};

export { Projects };
