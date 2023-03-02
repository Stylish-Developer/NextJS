import { DATA } from "./../../../data/CommentsData";

export default function handler(req, res) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    const comment = DATA.find((item) => item.id === parseInt(commentId));
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const newArr = DATA.find((item) => item.id === parseInt(commentId));
    const index = DATA.findIndex((item) => item.id === parseInt(commentId));

    DATA.splice(index, 1);

    res.status(200).json(newArr);
  }
}
