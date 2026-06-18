import { useState, useEffect } from "react";
import axios from "axios";
import UserProfilePresenter from "./UserProfilePresenter";
const UserProfileContainer = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
  }, [userId]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const responce = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`,
      );
      setUser(responce.data);
    } catch (err) {
      setError("Failed fetch user data");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const responce = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}/posts`,
      );
      setPosts(responce.data);
    } catch (err) {
      console.log("Failed fetch posts");
    }
  };

  const handleSaveProfile = async () => {
    try {
      const responce = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`,
        formData,
      );
      setUser(responce.data);
      setIsEditing(false);
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  const handleRetry = () => {
    fetchUserData();
  };

  const handleUpdateProfile = async (updatedUserData) => {
    try {
      const responce = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`,
        updatedUserData,
      );
      setUser(responce.data);
      setIsEditing(false);
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  return (
    <UserProfilePresenter
      user={user}
      posts={posts}
      loading={loading}
      error={error}
      onRetry={handleRetry}
      onUpdateUser={handleUpdateProfile}
    />
  );
};

export default UserProfileContainer;
