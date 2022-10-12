import React from "react";

export default function SideBar() {
  return (
    <>
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <a className="sidebar-brand" href="/">
            <span className="align-middle">Jobs</span>
          </a>
          <div className="sidebar-user">
            <div className="d-flex justify-content-center">
              <div className="flex-shrink-0">
                <img
                  src="img/avatars/avatar.jpg"
                  className="avatar img-fluid rounded me-1"
                  alt="Charles Hall"
                />
              </div>
              <div className="flex-grow-1 ps-2">
                <a
                  className="sidebar-user-title"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  Charles Hall
                </a>

                <div className="sidebar-user-subtitle">Designer</div>
              </div>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-header">Pages</li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="index.html">
                <i className="align-middle" data-feather="home"></i>{" "}
                <span className="align-middle">Home</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="add-skill.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Add Skills</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="job-rec.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Job Recommndation</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="add-questions.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Add Questions</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="assesment.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Assesment</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="profile.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Profile</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="leader-board.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Leader Board</span>
              </a>
            </li>
            <li className="sidebar-item active">
              <a className="sidebar-link" href="/interview">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Interview Platform</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/summery">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Summery</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
