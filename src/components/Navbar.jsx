import { Search, Bell, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <div className="px-53 mb-11 -mt-5 ">
      <h1 className="text-2xl font-semibold text-gray-800 ">Dashboard</h1>

      <div className="flex ">

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-3 py-1 rounded-lg bg-gray-50 "
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-4" />
        </div>
        <div className="flex  gap-2 ml-50">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Mail className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
