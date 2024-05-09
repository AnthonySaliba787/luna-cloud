import { FaCloudUploadAlt, FaCrown } from "react-icons/fa";
import { MdCloudSync } from "react-icons/md";

function Pricing() {
  return (
    <>
      <div>
        {/* Subscription Plans Section */}
        <div className="max-w-[2000px] min-h-screen justify-center flex flex-col items-center px-4 overflow-y-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center py-4">
            Subscription Plans
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-8 py-4 px-4 justify-center items-center">
            <div className="w-full shadow-xl bg-blue-100 flex flex-col p-4 my-4 rounded-lg hover:scale-[1.02] duration-300 items-center text-center">
              <FaCloudUploadAlt size={70} className="text-blue-600 my-2" />
              <h1 className="text-3xl font-bold">Tier 1</h1>
              <ul className="text-lg font-medium py-8">
                <li className="py-2">100 GB Storage</li>
                <li className="py-2">Send up to 5 GB</li>
                <li className="py-2">1 Account</li>
                <li className="py-2">Five Backups</li>
              </ul>
              <h2 className="text-xl text-blue-600">$5/month</h2>
              <button className="main-button hover:bg-blue-500 hover:shadow-xl active:bg-blue-400">
                Start Trial
              </button>
            </div>

            <div className="w-full scale-105 shadow-xl bg-yellow-100 flex flex-col p-4 my-4 rounded-lg hover:scale-[1.07] duration-300 items-center text-center">
              <FaCrown size={70} className="text-yellow-500 my-2" />
              <h1 className="text-3xl font-bold">Tier 2</h1>
              <ul className="text-lg font-medium py-8">
                <li className="py-2">500 GB Storage</li>
                <li className="py-2">Send up to 10 GB</li>
                <li className="py-2">5 Accounts</li>
                <li className="py-2">Unlimited Backup</li>
              </ul>
              <h2 className="text-xl text-yellow-500">$15/month</h2>
              <button className="main-button bg-yellow-500 hover:bg-yellow-400 hover:shadow-xl active:bg-yellow-300">
                Start Trial
              </button>
              <p className="text-sm text-yellow-500 font-bold">
                Most Popular Choice
              </p>
            </div>

            <div className="w-full shadow-xl bg-red-100 flex flex-col p-4 my-4 rounded-lg hover:scale-[1.02] duration-300 items-center text-center">
              <MdCloudSync size={70} className="text-red-600 my-2" />
              <h1 className="text-3xl font-bold">Tier 3</h1>
              <ul className="text-lg font-medium py-8">
                <li className="py-2">1 TB Storage</li>
                <li className="py-2">Send up to 15 GB</li>
                <li className="py-2">Unlimited Accounts</li>
                <li className="py-2">Unlimited Backup</li>
              </ul>
              <h2 className="text-xl text-red-600">$40/month</h2>
              <button className="main-button bg-red-600 hover:bg-red-500 hover:shadow-xl active:bg-red-400">
                Start Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
