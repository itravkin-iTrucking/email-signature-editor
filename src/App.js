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
    name: "Oleg Bogdan",
    department: "Fuel Management",
    phone: "(916) 269-4606",
    email: "oleg.bogdan@itrucking.org",
    website: "https://itruckingservices.org",
    linkedin: "https://www.linkedin.com/company/itrucking-services-inc/",
    facebook: "https://www.facebook.com/itruckingservicesinc/",
    instagram: "https://instagram.com/itrucking.inc/",
    image: "https://app.customesignature.com/upload/signature/complete/696/696.gif",
    customBtnLink: "https://itruckingservices.org/index.php?page=home#calendar",
    buttonText: "Search Trucks",
    companyName: "iTrucking Services Inc",
    extension: "202",
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
      email,
      website,
      linkedin,
      facebook,
      instagram,
      image,
      customBtnLink,
      buttonText,
      companyName,
      extension
    } = formData;

    return `
    <table class="signature_tbl" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-size:10px;font-family:Inter,sans-serif;">
      <tbody>
        <tr>
          <td class="layout_maintd" style="line-height:14px;font-family:Inter, sans-serif; border-collapse:collapse;">
            <table cellpadding="0" cellspacing="0" style="border-collapse: separate">
              <tbody>
                <tr>
                  <td valign="top" align="left" class="layout_border" style="border-collapse:collapse; padding:0px; border-radius:5px; border-width: 0px; border-color:#ffffff; border-style: solid;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td valign="middle" align="center" style="padding:0 15px 0 0; border-collapse:collapse;">
                            <a href="https://www.itruckingservices.org/" id="layout_link">
                              <img class="layout_logo" src="${image}" width="150">
                            </a>
                          </td>
                          <td valign="top" align="left" class="layout_divider" style="border:none; border-left-width:0px; border-left-color:#ffffff; border-left-style: solid; padding:0 0 0 15px; border-collapse:collapse;">
                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                              <tbody>
                                ${name ? `
                                  <tr>
                                    <td style="padding-bottom:10px;">
                                      <table border="0" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td style="padding:15px 0 0 0; border-collapse: collapse;">
                                              <table border="0" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" valign="middle">
                                                      <span class="layout_firstname" style="font-weight:bold; font-style:normal; color:#000000; font-size:18px; white-space: nowrap;">
                                                        ${name}
                                                      </span>
                                                    </td>
                                                    <td align="left" valign="middle" style="padding-left:5px;"><img class="layout_verified" width="15" height="15" src="https://app.customesignature.com/images/verify.gif" style="display:block;"></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          ${department ? `<tr><td><span class="layout_jobtitle" style="font-weight:normal; font-style:normal; color:#000000; font-size:12px;">${department}</span></td></tr>` : ''}
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                ` : ''}
                                ${companyName ? `<tr><td><span class="layout_company" style="font-weight:bold; font-style:normal; color:#000000; font-size:14px;">${companyName}</span></td></tr>` : ''}
                                ${phone ? `<tr><td><a href="tel:${phone}" style="font-weight:normal; font-style:normal; color:#000000; font-size:12px; text-decoration:none;">${phone}</a></td></tr>` : ''}
                                ${extension ? `<tr><td><span style="font-weight:bold; font-style:normal; color:#000000; font-size:12px;">Ext:</span> <a href="tel:${extension}" style="font-weight:normal; font-style:normal; color:#000000; font-size:12px; text-decoration:none;">${extension}</a></td></tr>` : ''}
                                ${email ? `<tr><td><a href="mailto:${email}" style="font-weight:normal; font-style:normal; color:#000000; font-size:12px; text-decoration:none;">${email}</a></td></tr>` : ''}
                                <tr>
                                  <td style="padding:10px 0 0 0; border-collapse:collapse;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                      <tbody>
                                        <tr>
                                          ${website ? `<td style="padding:0 4px 0 0" class="layout-web-icon sicon"><a href="${website}" target="_blank"><img alt="" src="https://app.customesignature.com/images/social/animation/2/web-icon.gif" width="22" style="display:block;"></a></td>` : ''}
                                          ${instagram ? `<td style="padding:0 4px 0 0" class="layout-insta-icon sicon"><a href="${instagram}" target="_blank"><img alt="" src="https://app.customesignature.com/images/social/animation/2/insta-icon.gif" width="22" style="display:block;"></a></td>` : ''}
                                          ${linkedin ? `<td style="padding:0 4px 0 0" class="layout-linkedin-icon sicon"><a href="${linkedin}" target="_blank"><img alt="" src="https://app.customesignature.com/images/social/animation/2/linkedin-icon.gif" width="22" style="display:block;"></a></td>` : ''}
                                          ${facebook ? `<td style="padding:0 4px 0 0" class="layout-facebook-icon sicon"><a href="${facebook}" target="_blank"><img alt="" src="https://app.customesignature.com/images/social/animation/2/facebook-icon.gif" width="22" style="display:block;"></a></td>` : ''}
                                          ${customBtnLink && buttonText ? `<td class="layout-custombtn imagetopngClass" data-image-name="custombtn"><a href="${customBtnLink}" style="text-decoration:unset;">
                          <div style="width:113px;height:22px;background-color:black;color:white; text-align: center; font-size:13px; vertical-align:middle;">
<span style="font-weight:bold;line-height:22px">${buttonText}</span></div>
                          </a></td>` : ''}
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  ` };

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

