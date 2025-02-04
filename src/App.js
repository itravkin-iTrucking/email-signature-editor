import React, { useState } from "react";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  const PASSWORD = "958715"; // Hardcoded password

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const [formData, setFormData] = useState({
    name: "Victor Cebotari",
    department: "Management Department",
    phone: "(916) 836-8386 x101",
    fax: "(916) 836-8378",
    email: "victor@itrucking.org",
    website: "www.itruckingservices.org",
    mc: "958715",
    title: "",
    linkedin: "https://www.linkedin.com/company/itrucking-services-inc/",
    facebook: "https://www.facebook.com/itruckingservicesinc/",
    instagram: "https://instagram.com/itrucking.inc/",
    image: "https://lh3.googleusercontent.com/d/10xb1HryL57XOvnoYt_vGL25v2c4NOrLR",
    buttonLink: "https://itruckingservices.org/index.php?page=home#calendar",
    buttonText: "Truck List",
  });

  const downloadFile = (content, fileName, contentType) => {
    const blob = new Blob([content], { type: contentType });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  const convertGoogleDriveLink = (link) => {
    const match = link.match(/\/d\/(.*?)\/view/);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    } else {
      console.error("Invalid Google Drive link format.");
      return link;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderSignature = () => {
    const {
      name,
      department,
      phone,
      fax,
      email,
      website,
      mc,
      linkedin,
      facebook,
      instagram,
      image,
      buttonLink,
      buttonText,
      title,
    } = formData;


  return `
  <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Tahoma; max-width: 450px;">
    <tbody>
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Tahoma;">
            <tbody>
              <tr>
                <td style="vertical-align: middle;">
                  <h2 style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0); font-weight: 600;">
                    ${name || ""}
                  </h2>
                  <p style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;">
                    ${title || ""}
                  </p>
                  <p style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;">
                    ${department || ""}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td width="30"><div style="width: 30px;"></div></td>
        <td width="1" style="width: 1px; height: auto; border-bottom: none; border-left: 1px solid rgb(247, 99, 99);"></td>
        <td width="30"><div style="width: 30px;"></div></td>
        <td style="vertical-align: middle;">
          <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Tahoma;">
            <tbody>
              ${phone ? `
              <tr height="25" style="vertical-align: middle;">
                <td width="30" style="vertical-align: middle;">
                  <img src="https://img.icons8.com/?size=100&id=85059&format=png&color=f76363" alt="mobilePhone" width="13" style="display: block; background-color: transparent;"></img>
                </td>
                <td style="padding: 0px; color: rgb(0, 0, 0);">
                  <a href="tel:${phone}" style="text-decoration: unset; color: rgb(0, 0, 0); font-size: 14px;">${phone}</a>
                </td>
              </tr>
              ` : ""}
              ${email ? `
              <tr height="25" style="vertical-align: middle;">
                <td width="30">
                  <img src="https://img.icons8.com/?size=100&id=93465&format=png&color=f76363" alt="emailAddress" width="13" style="display: block; background-color: transparent;"></img>
                </td>
                <td>
                  <a href="mailto:${email}" style="text-decoration: unset; color: rgb(0, 0, 0); font-size: 14px;">${email}</a>
                </td>
              </tr>
              ` : ""}
              ${website ? `
              <tr height="25" style="vertical-align: middle;">
                <td width="30">
                  <img src="https://img.icons8.com/?size=100&id=85777&format=png&color=f76363" alt="website" width="13" style="display: block; background-color: transparent; transform: rotate(90deg);"></img>
                </td>
                <td>
                  <a href="${website}" style="text-decoration: unset; color: rgb(0, 0, 0); font-size: 14px;">${website}</a>
                </td>
              </tr>
              ` : ""}
              ${mc ? `
              <tr height="25" style="vertical-align: middle;">
                <td width="30">
                  <img src="https://img.icons8.com/?size=100&id=85049&format=png&color=f76363" alt="address" width="13" style="display: block; background-color: transparent;"></img>
                </td>
                <td>
                  <span style="font-size: 14px; color: rgb(0, 0, 0);">${mc}</span>
                </td>
              </tr>
              ` : ""}
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Tahoma; width: 100%; max-width:450px;">
    <tbody>
      <tr><td height="30"></td></tr>
      <tr>
        <td width="auto" style="width: 100%; height: 1px; border-bottom: 1px solid rgb(247, 99, 99); border-left: none; display: block;"></td>
      </tr>
      <tr><td height="15"></td></tr>
    </tbody>
  </table>
  <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Tahoma; width: 100%; max-width:450px;">
    <tbody>
      <tr>
        <td style="vertical-align: top;">
          ${image ? `<img src="${image}" role="presentation" width="130" style="max-width: 130px; display: inline-block;">` : ""}
        </td>
        <td style="text-align: right; vertical-align: middle;">
          <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Tahoma; display: inline-block; max-width:450px;">
            <tbody>
              <tr style="text-align: right;">
                ${facebook ? `
                <td>
                  <a href="${facebook}" style="display: inline-block; padding: 0px; text-decoration:unset;border:none;">
                    <img src="https://img.icons8.com/?size=100&id=84872&format=png&color=bf4d4d" alt="facebook" width="24" style="max-width: 135px; display: block; background-color: transparent ;border-radius:50%;"></img>
                  </a>
                </td>
                <td width="5"></td>
                ` : ""}
                ${linkedin ? `
                <td>
                  <a href="${linkedin}" style="display: inline-block; padding: 0px; text-decoration:unset; border:none;">
                    <img src="https://img.icons8.com/?size=100&id=84888&format=png&color=bf4d4d" alt="linkedin" width="24" style="max-width: 135px; display: block; background-color: transparent; border-radius:50%;"></img>
                  </a>
                </td>
                <td width="5"></td>
                ` : ""}
                ${instagram ? `
                <td>
                  <a href="${instagram}" style="display: inline-block; padding: 0px; text-decoration:unset !important;border:none;">
                    <img src="https://img.icons8.com/?size=100&id=84884&format=png&color=bf4d4d" alt="instagram" width="24" style="max-width: 135px; display: block; background-color: transparent; border-radius:50%;"></img>
                  </a>
                </td>
                <td width="5"></td>
                ` : ""}
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <tr><td height="30"></td></tr>`};

  if (!isAuthenticated) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#f4f4f4",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            padding: "20px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
          <input
            type="password"
            placeholder="Enter Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            style={{
              width: "90%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          />
          {error && (
            <p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Email Signature Editor (GMail)
      </h1>
      <form
        style={{
          marginBottom: "20px",
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {Object.entries(formData).map(([key, value]) => (
          <div
            key={key}
            style={{
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              htmlFor={key}
              style={{
                width: "120px",
                fontWeight: "bold",
                fontSize: "14px",
                color: "#333",
              }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              id={key}
              type="text"
              name={key}
              value={value}
              onChange={handleInputChange}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            />
          </div>
        ))}
      </form>
      <h2 style={{ textAlign: "center" }}>Preview</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
        dangerouslySetInnerHTML={{ __html: renderSignature() }}
      ></div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => downloadFile(renderSignature(), "signature.html", "text/html")}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Download as HTML
        </button>
      </div>
    </div>
  );
};

export default App;

