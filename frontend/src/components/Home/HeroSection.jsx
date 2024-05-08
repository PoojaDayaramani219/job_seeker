import React, { useState, useEffect } from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const [employerCount, setEmployerCount] = useState(null);
  const [jobSeekerCount, setJobSeekerCount] = useState(null);
  const [jobCount, setJobCount] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userResponse = await fetch("http://localhost:4000/api/v1/user/getAllUsers");
      const userData = await userResponse.json();
      setEmployerCount(userData.employerCount);
      setJobSeekerCount(userData.jobSeekerCount);

      const jobResponse = await fetch("http://localhost:4000/api/v1/job/getAllJobs");
      const jobData = await jobResponse.json();
      setJobCount(jobData.jobCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>Find a job that suits</h1>
            <h1>your interests and skills</h1>
            <p>Whether you're a seasoned professional seeking new challenges or a recent graduate eager to kick-start your career, our platform is designed to connect you with opportunities that align perfectly with your aspirations.
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>

        <div className="details">
          <div className="card">
          <div className="icon"><FaUserPlus /></div>
            <div className="content">
              <p>{employerCount}</p>
              <p>Employers</p>
            </div>
          </div>
          <div className="card">
          <div className="icon"><FaUsers /></div>
            <div className="content">
              <p>{jobSeekerCount}</p>
              <p>Job Seekers</p>
            </div>
          </div>
          <div className="card">
          <div className="icon"><FaSuitcase /></div>
            <div className="content">
              <p>{jobCount}</p>
              <p>Active Jobs</p>
            </div>
          </div>
          <div className="card">
          <div className="icon"><FaBuilding /></div>
            <div className="content">
              <p>15</p>
              <p>Companies</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default HeroSection;
