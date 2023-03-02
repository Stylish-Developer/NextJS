// --> Here i Imported my comments data into this api file
import { DATA } from "./../../../data/CommentsData";

export default function handler(req, res) {
  if (req.method === "GET") {
    // i used it here for to serve the data to render
    res.status(200).json(DATA);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: new Date(),
      text: comment,
    };
    DATA.push(newComment);
    res.status(200).json(DATA);
  }
}
