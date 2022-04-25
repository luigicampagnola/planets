const API_URL = "http://localhost:8000";

function httpGetPlanets() {
  fetch(`${API_URL}/planets`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
