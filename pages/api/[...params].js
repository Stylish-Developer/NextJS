export default function handler(req, res) {
  const params = req.query.params;
  res.status(200).json(params);
}

// for this catch all routes and optional catch all routes [[ ...params ]].js
