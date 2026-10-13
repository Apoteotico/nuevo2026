import { useEffect, useState } from "react";
import { usePosts } from "../../context/postsContext";

function CommentSolution({ comment }) {
  return (
    <div className="p-4 mb-3 bg-zinc-800 rounded-md shadow-md">
      {/* Autor */}
      <p className="text-sm text-gray-400 mb-1">
        {comment.autor?.username || "Usuario desconocido"}
      </p>

      {/* Texto del comentario */}
      <p className="text-white">{comment.description}</p>

      {/* Fecha */}
      <p className="text-xs text-gray-500 mt-2">
        {new Date(comment.createdAt).toLocaleString()}
      </p>
    </div>
  );
}

export default CommentSolution;



/* import { useEffect, useState } from "react";
import { usePosts } from "../../context/postsContext";

function CommentSolution({ id }) {
  const { getCommentById } = usePosts();

  //estado
  const [comment, setComment] = useState({});

  useEffect(async () => {
    try {
      const fetchedPost = await getCommentById(id);
      setComment(fetchedPost);
      console.log(fetchedPost);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }, [comment]);

  return <div className="text-zinc-800">CommentSolution</div>;
}

export default CommentSolution;
 */