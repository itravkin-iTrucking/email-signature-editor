import React, { useState } from "react";


const App = () => {
  const [formData, setFormData] = useState({
    name: "Victor Cebotari",
    department: "Management Department",
    phone: "(916) 836-8386 x101",
    fax: "(916) 836-8378",
    email: "victor@itrucking.org",
    website: "www.itruckingservices.org",
    mc: "958715",
  });
  // Function to trigger file download
  const downloadFile = (content, fileName, contentType) => {
    const blob = new Blob([content], { type: contentType });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  // Function to convert HTML to RTF format
  //
  //eslint-disable-next-line
  const downloadDocx = async (htmlContent) => {
    try {
      const response = await fetch("http://localhost:3001/convert-html-to-docx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ htmlContent })
      });

      if (!response.ok) {
        throw new Error("Failed to convert HTML to DOCX.");
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "signature.docx";
      link.click();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //eslint-disable-next-line
  const downloadRtf = async (htmlContent) => {
   try {
      const response = await fetch("http://localhost:3001/convert-html-to-rtf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ htmlContent })
      });

      if (!response.ok) {
        throw new Error("Failed to convert HTML to RTF.");
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "signature.rtf";
      link.click();
    } catch (error) {
      console.error("Error:", error);
    }


  };

  // Update form values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Render the email signature with updated values
  const renderSignature = () => {
    return `
      <style>a{text-decoration:none;}</style>
      <div style="max-width:400px;margin-left:20px;font-size:14px;font-family: 'Montserrat', sans-serif;">
        <div style="color:#132033; font-weight: bold;">${formData.name}</div>
        <div style="color:#5b5c70; font-weight: 500;">${formData.department}</div>
        <hr style="background:#132033; height:1px; margin-top:2px; max-width:400px;margin-left:0;">
        <div>
          <span style="vertical-align:middle; text-align:center;">
            <img src="https://cdn1.iconfinder.com/data/icons/material-communication/18/phone-16.png" alt="">
          </span>
          <span style="margin-left:10px;">
            <a href="tel:${formData.phone}" style="text-decoration:unset;color:#5b5c70;">${formData.phone}</a>
          </span>
        </div>
        <div>
          <span style="vertical-align:middle; text-align:center;">
            <img src="https://cdn4.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/print.png" alt="">
          </span>
          <span style="margin-left:10px;">
            <a href="tel:${formData.fax}" style="text-decoration:unset;color:#5b5c70;">${formData.fax}</a>
          </span>
        </div>
        <div>
          <span style="vertical-align:middle; text-align:center;">
            <img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519948-008_Mail-16.png" alt="">
          </span>
          <span style="margin-left:10px;">
            <a href="mailto:${formData.email}" style="text-decoration:unset;color:#5b5c70;">${formData.email}</a>
          </span>
        </div>
        <div>
          <span style="vertical-align:middle; text-align:center;">
            <img src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/59-16.png" alt="">
          </span>
          <span style="margin-left:10px;">
            <a href="https://${formData.website}" target="_blank" style="text-decoration:unset;color:#5b5c70;">${formData.website}</a>
          </span>
        </div>
        <div>
          <span style="vertical-align:middle; text-align:center; font-weight: bold;">MC</span>
          <span style="margin-left:10px;color:#5b5c70;margin-left:3px;">${formData.mc}</span>
        </div>
        <hr style="background:#132033; height:1px; max-width:400px;margin-left:0;">
        <div style="max-width:400px">
          <span style="">
            <img src="https://lh3.googleusercontent.com/d/10xb1HryL57XOvnoYt_vGL25v2c4NOrLR" alt="" style="height:60px;">
          </span>
          <span style="margin-left:10px;margin-top:-2px;float:right;line-height: 80px;">
            <a href="https://itruckingservices.org/index.php?page=home#calendar" target="_blank" 
              style="border:2px solid #132033; padding:5px 15px; border-radius: 5px;text-decoration:unset;color:#132033;font-weight: bold;">
              Trucks list
            </a>
          </span>
          <span style="float:right; vertical-align: middle; text-align:center; line-height: 80px;text-decoration:unset;">
            <a href="https://www.linkedin.com/company/itrucking-services-inc/" target="_blank" style="text-decoration:unset;">
              <img src="https://cdn3.iconfinder.com/data/icons/iconano-social/512/201-LinkedIn-16.png" alt="">
            </a>
            <a href="https://www.facebook.com/itruckingservicesinc/" target="_blank" style="text-decoration:unset;">
              <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-16.png" alt="">
            </a>
            <a href="https://instagram.com/itrucking.inc/" target="_blank" style="text-decoration:unset;">
              <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/38-instagram-16.png" alt="">
            </a>
          </span>
        </div>
      </div>
    `;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Email Signature Editor (GMail)
      </h1>
      <h3>How to use:</h3>
      <div>
        <ol>
          <li>Enter your data</li>
          <li>Click 'Download as HTML'</li>
          <li>Open the downloaded signature in the separate browser tab</li>
          <li>Select all (cmd + A) and copy (cmd + C )</li>
          <li>Paste copied signature in the gmail settings (Settings => See all settings => Signature => Paste)</li>
          <li>Save changes</li>
        </ol>
      </div>
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

