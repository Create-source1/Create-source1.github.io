// src/utils/downloadResume.js
import { saveAs } from "file-saver";

export const openAndDownloadResume = () => {
  const fileURL = "/Pooja_Jaiswal_Resume.pdf";

  // Open the resume in a new tab
  window.open(fileURL, "_blank", "noopener,noreferrer");

  // Download the resume file
  fetch(fileURL)
    .then((res) => res.blob())
    .then((blob) => {
      saveAs(blob, "Pooja_Jaiswal_Resume.pdf");
    })
    .catch((err) => {
      console.error("Error downloading resume:", err);
    });
};
