import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null); 

  useEffect(() => {
    setStories([
      { id: 1, username: "ram", profilePic: "/profpic1_imresizer.jpg" },
      { id: 2, username: "sam", profilePic: "/profpic2_imresizer.jpg" },
    ]);

    setPosts([
      {
        id: 1,
        username: "santhosh",
        profilePic: "/profpic1_imresizer.jpg",
        image: "/profpic1_imresizer.jpg",
        likes: 120,
        caption: "Beautiful day!",
        comments: ["Nice!", "Wow!"]
      },
      {
        id: 2,
        username: "kumar",
        profilePic: "/profpic2_imresizer.jpg",
        image: "/profpic2_imresizer.jpg",
        likes: 98,
        caption: "Sunset view",
        comments: ["Amazing!", "So pretty!"]
      },
    ]);

    setUsers([
      { id: 1, username: "varun", profilePic: "./profpic1_imresizer.jpg" },
      { id: 2, username: "tarun", profilePic: "./profpic2_imresizer.jpg" },
    ]);
  }, []);

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="home-container">
      <nav className="side-nav">
        <h2 className="logo">Instagram</h2>
        <ul>
          <li>🏠 Home </li>
          <li>🔍 Search</li>
          <li>🧭 Explore</li>
          <li>📽 Reels</li>
          <li>✉︎ Message</li>
          <li>➕ Create</li>
          <li>❤️ Notifications</li>
          <li>👤 Profile</li>
          <li>More</li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="stories">
          {stories.map((story) => (
            <div key={story.id} className="story">
              <img src={story.profilePic} alt="Story" className="story-pic" />
              <p>{story.username}</p>
            </div>
          ))}
        </div>

        <div className="feed">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-header">
                <img src={post.profilePic} alt="Profile" className="profile-pic" />
                <h3>{post.username}</h3>
                <button className="menu-btn" onClick={() => toggleMenu(post.id)}>⋯</button>

                {activeMenu === post.id && (
                  <div className="dropdown-menu">
                    <p>💾 Save</p>
                    <p>🚫 Report</p>
                    <p>👋 Unfollow</p>
                    <p>🔗 Copy Link</p>
                  </div>
                )}
              </div>

              <img src={post.image} alt="Post" className="post-image" />
              <div className="post-actions">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments.length}</span>
                <span>🔗</span>
              </div>
              <p className="caption"><strong>@{post.username}</strong> {post.caption}</p>
              <div className="comments">
                {post.comments.map((comment, index) => (
                  <p key={index} className="comment">💬 {comment}</p>
                ))}
              </div>
              <input type="text" placeholder="Add a comment..." className="comment-input" />
            </div>
          ))}
        </div>
      </div>

      <div className="user-suggestions">
        <h3>Suggested Users</h3>
        {users.map((user) => (
          <div key={user.id} className="suggested-user">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            <p>{user.username}</p>
            <button>Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
