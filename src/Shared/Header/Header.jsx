import moment from "moment";
import logo from "../../assets/logo.png";
const Header = () => {
  const day = moment().format("dddd");
  const restOfDate = moment().format("MMMM D, YYYY");
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <p className="text-[#706F6F] text-lg mt-5">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium mt-2">
        <span>{day}</span> <span className="text-[#706F6F]">{restOfDate}</span>
      </p>
    </div>
  );
};

export default Header;
