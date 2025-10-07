const API_URL = "https://your-site.netlify.app/.netlify/functions/carquery";
return {
  statusCode: 200,
  body: JSON.stringify(data),
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  }
};

