import React, { useState } from 'react';
import 'animate.css';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const projects = [
    {
      name: "E-commerce Platform",
      codeLink: "https://github.com/user/ecommerce-platform",
      outputLink: "https://ecommerce-platform-live.com",
    },
    {
      name: "Social Media App",
      codeLink: "https://github.com/user/social-media-app",
      outputLink: "https://social-media-app-live.com",
    },
    {
      name: "Project Management Tool",
      codeLink: "https://github.com/user/project-management-tool",
      outputLink: "https://project-management-tool-live.com",
    },
    // Add more projects...
  ];

  const [comments, setComments] = useState({});
  const [newComments, setNewComments] = useState({});
  const [expandedProject, setExpandedProject] = useState(null);

  const handleAddComment = (projectName) => {
    if (newComments[projectName]?.trim() !== "") {
      setComments((prevComments) => ({
        ...prevComments,
        [projectName]: [...(prevComments[projectName] || []), newComments[projectName]],
      }));
      setNewComments((prevNewComments) => ({
        ...prevNewComments,
        [projectName]: "",
      }));
    }
  };

  const handleDeleteComment = (projectName, index) => {
    setComments((prevComments) => ({
      ...prevComments,
      [projectName]: prevComments[projectName]?.filter((_, i) => i !== index),
    }));
  };

  const toggleExpand = (projectName) => {
    setExpandedProject(expandedProject === projectName ? null : projectName);
  };

  return (
    <div className="projects-page">
      <div className="animated-background"></div>
      <div className="container mt-5">
      <h1 className="mb-5 text-center text-primary">Projects</h1>

        <ul className="list-group project-list">
          {projects.map((project) => (
            <li
              key={project.name}
              className={`list-group-item project-row ${
                expandedProject === project.name ? "expanded" : ""
              }`}
              onClick={() => toggleExpand(project.name)}
            >
              <div className="project-header">
                <h5 className="text-primary">{project.name}</h5>
                <span className="toggle-icon">
                  {expandedProject === project.name ? "-" : "+"}
                </span>
              </div>
              {expandedProject === project.name && (
                <div className="project-details">
                  <p>Explore the code repository and live demo for this project.</p>
                  <div className="d-flex justify-content-between mb-3">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      View Code
                    </a>
                    <a
                      href={project.outputLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary"
                    >
                      Live Demo
                    </a>
                  </div>
                  <h6>Comments</h6>
                  <ul className="list-group mb-3">
                    {comments[project.name]?.map((comment, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <span>{comment}</span>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteComment(project.name, index);
                          }}
                        >
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={newComments[project.name] || ""}
                      onChange={(e) =>
                        setNewComments((prevNewComments) => ({
                          ...prevNewComments,
                          [project.name]: e.target.value,
                        }))
                      }
                      placeholder="Add a comment"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddComment(project.name);
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
