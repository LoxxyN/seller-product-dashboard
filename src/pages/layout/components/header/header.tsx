// import { Navbar } from '../navbar'
import { Avatar as HAvatar } from "@heroui/react";
import { Logo } from "../logo";
import { Switcher } from "../switcher";
import { Avatar } from "../avatar";

export const Header = () => {
  return (
    <header>
      {/* <div className='header__wrapper'>
				<Navbar />
			</div> */}
      <div className="py-[18.5px] px-6 flex justify-between">
        <Logo />
        <div className="flex gap-4">
          <Switcher />
          <Avatar />
        </div>
      </div>
    </header>
  );
};
