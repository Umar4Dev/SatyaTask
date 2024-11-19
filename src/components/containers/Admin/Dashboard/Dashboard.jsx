import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import StudentSVG from "../../../../assets/images/svg/ph_student.svg";
import GrayStudentSVG from "../../../../assets/images/svg/gray_student.svg";
import InstructorSVG from "../../../../assets/images/svg/switch_account.svg";
import CoursesSVG from "../../../../assets/images/svg/receipt.svg";
import EnrollmentSVG from "../../../../assets/images/svg/undo.svg";
import GraphUp from "../../../../assets/images/svg/call_made.svg";
import GraphDown from "../../../../assets/images/svg/south_east.svg";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import CustomTable from "../../../../assets/elements/CustomTable";
import Respiratory from "../../../../assets/respiratory1.svg";
import Respiratory2 from "../../../../assets/respiratory2.svg";
import Respiratory3 from "../../../../assets/respiratory3.svg";
import { LuDownload } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { AiOutlineInsurance } from "react-icons/ai";
import { BsGenderFemale } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import axios from "axios";
const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [patientList, setPatientList] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            Authorization: "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0",
          },
        }
      );
      console.log("Response data:", response.data);
      const data = response.data;
      setPatientList(data);
      const jessicaData = data.find(
        (patient) => patient.name === "Jessica Taylor"
      );

      if (jessicaData) {
        setUserData(jessicaData);
      } else {
        throw new Error("Jessica Taylor's data not found");
      }

      setLoading(false);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Request setup error:", error.message);
      }
    }
  };

  // Call the function

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(userData, "USER-DATAAA");
  const data = {
    labels: userData.diagnosis_history.map((item) => item.month),
    datasets: [
      {
        label: "No. of Enrollments",
        data: userData.diagnosis_history.map((item) => item.year),
        borderColor: "#4E57EF",
        backgroundColor: "rgba(78, 87, 239, 0.1)",
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: "#4E57EF",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#4E57EF",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        labels: userData.diagnosis_history.map((item) => item.month),
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          color: "#333",
          font: {
            size: 12,
          },
        },
      },
      y: {
        datasets: userData.diagnosis_history.map((item) => item.year),
        beginAtZero: false,
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          color: "#333",
          font: {
            size: 12,
          },
          stepSize: 1,
        },
      },
    },
  };
  console.log(userData.respiratory_rate);
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Patients</h2>
        <div className="patients-profile">
          {patientList.map((patient, index) => (
            <div className="patients-list" key={index}>
              <img src={patient.profile_picture} alt="" />
              <div className="patients-names">
                <p>{patient.name}</p>
                <span>
                  {patient.gender} , {patient.age}
                </span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="diagnosis-history">
          <h2>Diagnosis History</h2>
          <div className="chart">
            <Line data={data} options={options} height={100} width={200} />
            <div className="combo-buttons">
              <div className="syntolics">
                <p>Systolic</p>
                <h3>
                  {userData.diagnosis_history[0]?.blood_pressure?.systolic
                    ?.value || "N/A"}
                </h3>
                <span>
                  {userData.diagnosis_history[0]?.blood_pressure?.systolic
                    ?.levels || "Unknown"}
                </span>
              </div>
              <hr />
              <div className="syntolics">
                <p>Diastolic</p>
                <h3>
                  {userData.diagnosis_history[0]?.blood_pressure?.diastolic
                    ?.value || "N/A"}
                </h3>
                <span>
                  {" "}
                  {userData.diagnosis_history[0]?.blood_pressure?.diastolic
                    ?.levels || "Unknown"}
                </span>
              </div>
            </div>
          </div>
          <div className="metrics">
            <div className="metric" style={{ backgroundColor: "#E0F3FA" }}>
              <img src={Respiratory} alt="" />
              <h3>Respiratory Rate</h3>
              <>
                <p>
                  {userData.diagnosis_history[0]?.respiratory_rate?.value} bpm
                </p>
                <small>
                  {userData.diagnosis_history[0]?.respiratory_rate?.levels}
                </small>
              </>
            </div>
            <div className="metric" style={{ backgroundColor: "#FFE6E9" }}>
              <img src={Respiratory2} alt="" />

              <h3>Temperature</h3>
              <p>{userData.diagnosis_history[0]?.temperature?.value}°F</p>
              <small>
                {userData.diagnosis_history[0]?.temperature?.levels}
              </small>
            </div>
            <div className="metric" style={{ backgroundColor: "#FFE6F1" }}>
              <img src={Respiratory3} alt="" />

              <h3>Heart Rate</h3>
              <p>{userData.diagnosis_history[0]?.heart_rate?.value} bpm</p>
              <small>{userData.diagnosis_history[0]?.heart_rate?.levels}</small>
            </div>
          </div>
        </section>
        <section className="diagnostic-list">
          <h2>Diagnostic List</h2>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Problem/Diagnosis</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              {userData.diagnostic_list.map((testName, index) => (
                <tbody>
                  <tr>
                    <td>{testName.name}</td>
                    <td>{testName.description}</td>
                    <td>{testName.status}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </section>
      </main>

      {/* Details Panel */}
      <div className="right-side-menu">
        <aside className="details-panel">
          <>
            <div className="profile">
              <img src={userData?.profile_picture} alt="Profile" />
              <h3>{userData?.name}</h3>
              <p>
                <span>{userData.gender}</span>, {userData.age}
              </p>
            </div>
            <div className="profile-details">
              <div className="svg-bg">
                <LiaBirthdayCakeSolid />
              </div>

              <div className="user-name-profile">
                <p>Date Of Birth</p>
                <p>{userData.date_of_birth}</p>
              </div>
            </div>
            <div className="profile-details">
              <div className="svg-bg">
                {" "}
                <BsGenderFemale />
              </div>

              <div className="user-name-profile">
                <p>Gender</p>
                <p>{userData.gender}</p>
              </div>
            </div>
            <div className="profile-details">
              <div className="svg-bg">
                {" "}
                <IoMdCall />
              </div>

              <div className="user-name-profile">
                <p>Contact Info</p>
                <p>{userData.phone_number}</p>
              </div>
            </div>
            <div className="profile-details">
              <div className="svg-bg">
                {" "}
                <IoMdCall />
              </div>

              <div className="user-name-profile">
                <p>Emergency Contact</p>
                <p>{userData.emergency_contact}</p>
              </div>
            </div>
            <div className="profile-details">
              <div className="svg-bg">
                <AiOutlineInsurance />
              </div>

              <div className="user-name-profile">
                <p>Insurance Provider</p>
                <p>{userData.insurance_type}</p>
              </div>
            </div>
          </>

          <div className="show-info-btn">
            <button>Show All Information</button>
          </div>
        </aside>
        <aside className="details-panel2">
          <h2>Lab Results</h2>
          <div className="testing-div">
            {userData.lab_results.map((testName, index) => (
              <div key={index} className="tested">
                <p>{testName}</p>
                <LuDownload className="icons" />
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
