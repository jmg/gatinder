const API_URL = process.env.NODE_ENV == "production" ?
    "https://gatinder.catpuccino.org/api/v1"
    : "http://localhost:8000/api/v1"

export default API_URL