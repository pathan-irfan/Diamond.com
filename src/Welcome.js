
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './welcom.css';

function Welcome() {
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const storedProfilePicture = localStorage.getItem("profilePicture");
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture);
    }
  }, []);

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfilePicture(imageUrl);

      // Save the image URL in local storage
      localStorage.setItem("profilePicture", imageUrl);
    }
  };

  const removeProfilePicture = () => {
    setProfilePicture(null);
    // Remove the image URL from local storage
    localStorage.removeItem("profilePicture");
  };

  return (
    <div id="f1">
      <center>
        <h1 className="colour">Hello welcome to diamond.watch.com</h1>
      </center>
      <div id="main1">
        <center>
          <label htmlFor="profile-pic-upload" style={{ cursor: "pointer" }}>
            <div id="circal">
              {profilePicture ? (
                <>
                  <img
                    src={profilePicture}
                    alt="Profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <button onClick={removeProfilePicture} className="remove-button">
                    Remove profile
                  </button>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-camera"></i>
                  <input
                    type="file"
                    id="profile-pic-upload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </>
              )}
            </div>
          </label>
        </center>
        <p className="colour">hello MR</p>
        <p className="colour">your profile</p>
        <Link to="/order">
          <p className="colour">your order</p>
        </Link>
        <p className="colour">contact us</p>
        <p className="colour">payment method</p>
      </div>
    </div>
  );
}

export default Welcome;
