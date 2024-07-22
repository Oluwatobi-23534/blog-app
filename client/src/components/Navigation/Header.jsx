import { Navbar, TextInput, Button, NavbarCollapse } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2 flex justify-between px-7">
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <div className="px-2 py-1 bg-gradient-to-r rounded-lg text-neutral-50 from-red-600 via-orange-400 to-red-600">
            ContentConnect
          </div>
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={CiSearch}
            className="hidden lg:inline"
          />
        </form>
      </div>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <BsFillMoonStarsFill />
        </Button>
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <IoMdNotifications />
        </Button>
        <Link>
          <Button
            outline
            gradientDuoTone="greenToBlue"
            pill
            className="hidden lg:inline"
          >
            Join Us
          </Button>
        </Link>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/blog-post"} as={"div"}>
          <Link to="/blog-post">Articles</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/create-post"} as={"div"}>
          <Link to="/create-post">Create</Link>
        </Navbar.Link>

        <Link>
          <Button
            outline
            gradientDuoTone="greenToBlue"
            pill
            className="sm:inline lg:hidden mt-3"
          >
            Join Us
          </Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
