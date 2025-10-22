const timeElement = document.getElementById("time");

function updateTime() {
  const now = new Date();
  const milliseconds = now.getTime();
  const readable = now.toLocaleTimeString();
  timeElement.textContent = `${milliseconds} (${readable})`;
}

updateTime();
setInterval(updateTime, 1000);



