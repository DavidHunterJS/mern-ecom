import axios from "axios";

/**
 * Get the base URL depending on the environment.
 */
function getBaseUrl() {
  // Check if the environment is production
  if (process.env.NODE_ENV === "production") {
    return "https://api.isharethings.com"; // Production base URL
  } else {
    return "http://localhost:5000"; // Development base URL
  }
}

// Create an axios instance with the base URL depending on the environment
const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
  timeout: 5000, // Example timeout
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
