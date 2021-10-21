import Post from "./Post"
import { useEffect, useState } from "react";
import {onSnapshot, collection, query, orderBy} from "firebase/firestore";
import {db} from "../firebase";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    // UseEffect Pertama
    useEffect(() => {
      const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs)
        });

        return () => {
            unsubscribe()
        }
    }, [db])

    // UseEffect Kedua
    // useEffect(
    //     () => 
    //    onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), 
    //    snapshot => {
    //         setPosts(snapshot.docs)
    //       }
    //     ),

    //     [db]
    // )

    
    return (
        
        <div>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))}
            
        </div>
    )
}

export default Posts
