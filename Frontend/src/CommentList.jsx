import axios from "axios";
import { useEffect, useState } from "react";

export default function CommentList({ postId }) {
  const [commentList, setCommentList] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setCommentList(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = commentList.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}
