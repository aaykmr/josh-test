import { useRouter } from "next/router";
import { useContext, useState } from "react";
import kebabCase from "lodash.kebabcase";
import toast from "react-hot-toast";
import { UserContext } from "../lib/context";
import { firestore, auth, serverTimestamp } from "../lib/firebase";

export default function CreateNewPost() {
  const router = useRouter();
  const { username } = useContext(UserContext);
  const [title, setTitle] = useState("");

  // Ensure slug is URL safe
  const slug = encodeURI(kebabCase(title));

  // Validate length
  const isValid = title.length > 3 && title.length < 100;

  // Create a new post in firestore
  const createPost = async (e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;
    const ref = firestore
      .collection("users")
      .doc(uid)
      .collection("posts")
      .doc(slug);

    // Tip: give all fields a default value here
    const data = {
      title,
      slug,
      uid,
      username,
      published: false,
      content: "",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      heartCount: 0,
    };

    await ref.set(data);

    toast.success("Post created!");

    // Imperative navigation after doc is set
    router.push(`/admin/${slug}`);
  };

  return (
    <form onSubmit={createPost} className="widecard p-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Article"
        className="card ml-0"
      />
      <p>
        <strong>Slug:</strong> {slug}
      </p>
      <button type="submit" disabled={!isValid} className=" btn btn-success">
        Create New Post
      </button>
    </form>
  );
}
