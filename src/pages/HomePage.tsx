import Divider from "../components/Divider";
import Input from "../components/Input";

const HomePage = () => {
  return (
    <div className="w-screen h-screen grid place-items-center bg-gradient-to-br from-[#0D324D] to-[#7F5A83]">
      <div className=" flex flex-row gap-[8px] text-white">
        <Input label="Owner" />
        <Divider />
        <Input label="Repository" />
      </div>
    </div>
  );
};

export default HomePage;
