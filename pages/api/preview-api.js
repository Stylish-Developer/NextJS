// --> API ROUTES FUNCTION FOR SET THE PREVIEW MODE
export default function handler(req, res) {
  res.setPreviewData({});
  res.redirect(req.query.redirect);
}
