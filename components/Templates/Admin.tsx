import { BaseSyntheticEvent, ReactNode } from "react";
import { SendSMS } from "@/helpers/requests/SMS";
import Sidebar from "@/components/Organisms/Sidebar";
import Text from "@/components/Atoms/Text";

const Admin = ({ children, title }: AdminTypes) => {
  const sendMessage = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const res = await SendSMS({
      phone: "+639430372709",
      message: "Good night",
    });
  };

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col w-full overflow-auto p-4 gap-2">
        <div className="w-full">
          <Text as="h1" className="capitalize font-semibold">
            {title}
          </Text>
        </div>
        <div className="h-auto text-white px-4 pt-8">
          {children}
          <button className="p-y px-4  bg-green-500" onClick={sendMessage}>
            Send Msg
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;

export type AdminTypes = {
  children: ReactNode;
  title: string;
};
