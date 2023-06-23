import Hero from "../components/Hero/Hero";
import { selectUserInfo } from "../redux/slices/authSlice";
import { useAppSelector } from "../redux/store";

const HomePage = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default HomePage;
