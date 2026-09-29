import { setStudioStatus, handleGatewayNavigation } from "../gateway.js";

document.addEventListener("DOMContentLoaded", () => {
  const studioStatus = document.getElementById("studioStatus");

  setStudioStatus(studioStatus);

  const navigationLinks = document.querySelectorAll("[data-entry]");

  navigationLinks.forEach((link) => {
    link.addEventListener("click", handleGatewayNavigation);
  });
});
