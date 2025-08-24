import React from 'react';
import { useTranslation } from 'react-i18next';
import INFO from '../../data/user';
import Project from './project';

const AllProjects = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-5">
      {INFO.projects.map((project, index) => (
        <div key={index}>
          <Project
            title={project.id}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
            technologies={project.technologies.map((tech) => ({
              ...tech,
              link: `${t('projects.techStack')}: ${tech.link}`,
            }))}
          />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
