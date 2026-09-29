const STUDIO_OPEN_HOUR = 10;
const STUDIO_CLOSE_HOUR = 19;

export function getStudioStatus(date = new Date()) {
  const hour = date.getHours();
  const isOpen = hour >= STUDIO_OPEN_HOUR && hour < STUDIO_CLOSE_HOUR;

  return {
    isOpen,
    label: isOpen ? "OPEN NOW" : "CLOSED NOW"
  };
}

export function setStudioStatus(element, date = new Date()) {
  if (!element) return;

  const status = getStudioStatus(date);

  element.textContent = status.label;
  element.classList.toggle("is-open", status.isOpen);
  element.classList.toggle("is-closed", !status.isOpen);
}

export function handleGatewayNavigation(event) {
  const target = event.currentTarget;
  const destination = target?.getAttribute("href");

  if (!destination) {
    event.preventDefault();
    return;
  }

  const notice = document.getElementById("gatewayNotice");

  if (notice) {
    notice.hidden = true;
  }
}
