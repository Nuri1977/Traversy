import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/store";
import { selectUserInfo } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const userInfo = useAppSelector(selectUserInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    setLoading(false);
  }, [navigate, userInfo]);

  if (loading) return <div>Loading...</div>;

  return <div>ProfilePage</div>;
};

export default ProfilePage;
