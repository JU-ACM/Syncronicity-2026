import Discount from "./components/Discount";
import MembershipPerks from "./components/MembershipPerks";
import Register from "./components/Register";

const Membership = () => {
  return (
    <div className="py-28 h-fit w-full flex flex-col gap-12 items-center">
      <MembershipPerks />
      <Discount />
      <Register />
    </div>
  );
}

export default Membership;
