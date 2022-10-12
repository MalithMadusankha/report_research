import { useRef, useState, useEffect } from "react";
import "../App.css";
import Footer from "../componet/Footer";
import SideBar from "../componet/SideBar";
import TopNavBar from "../componet/TopNavBar ";

import VideoRoc from "./VideoRoc";

function Interview() {
  return (
    <div className="">
      <div className="container-background"></div>
      <div className="wrapper">
        {/* SideBar  */}
        <SideBar />
        <div className="main">
          {/* Nav Bar */}
          <TopNavBar />
          <main className="content">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-lg-6 offset-lg-3">
                  <div className="mb-3">
                    <h1 className="h3 d-inline align-middle">
                      Interview Traning Platform
                    </h1>
                  </div>
                  <div className="card">
                    <div className="row">
                      <div className="col"></div>
                    </div>
                    <div className="text-center bg-secondery">
                      <div style={{ height: "150px", padding: 20 }}>
                        <p>Question here</p>
                      </div>
                      <VideoRoc />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Interview;
