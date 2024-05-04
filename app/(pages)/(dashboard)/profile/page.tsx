import { PropsProfile } from "@/app/constants/types";
import Profile from "./component/Profile";

const Page: React.FC<PropsProfile> = ({ handleFileChange }) => {
  return (
    <div>
      <Profile handleFileChange={handleFileChange} />{" "}
    </div>
  );
};

export default Page;
