import AuthCheck from "../../components/AuthCheck";
import PostFeed from "../../components/PostFeed";
import { firestore, auth, serverTimestamp } from "../../lib/firebase";
import CreateNewPost from "../../components/CreateNewPost";

import { useCollection } from "react-firebase-hooks/firestore";

export default function AdminPostsPage(props) {
  return (
    <main>
      <AuthCheck>
        <PostList />
        <CreateNewPost />
      </AuthCheck>
    </main>
  );
}

function PostList() {
  const ref = firestore
    .collection("users")
    .doc(auth.currentUser.uid)
    .collection("posts");
  const query = ref.orderBy("createdAt");
  const [querySnapshot] = useCollection(query);

  const posts = querySnapshot?.docs.map((doc) => doc.data());

  return (
    <>
      <h1>Manage your Posts</h1>
      <PostFeed posts={posts} admin />
    </>
  );
}
