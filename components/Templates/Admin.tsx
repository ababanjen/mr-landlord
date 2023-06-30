import { BaseSyntheticEvent, ReactNode } from 'react';
import { SendSMS } from '@/helpers/requests/SMS';
import Sidenav from '@/components/Organisms/Sidenav';
import Text from '@/components/Atoms/Text';
import useStore from '@/hooks/global/useStore';
import useGetAdminInfo from '@/hooks/useGetAdminInfo';

const Admin = ({ children }: AdminTypes) => {
  const sidenav = useStore((state) => state.sidenav, ['admin']);
  useGetAdminInfo()

  const sendMessage = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const res = await SendSMS({
      phone: '+639430372709',
      message: 'Good night',
    });
  };

  return (
    <div className="flex min-h-screen w-full">
      <Sidenav />
      <div className="flex flex-col w-full overflow-auto p-4 gap-2">
        <div className="w-full">
          <Text as="h1" className="capitalize font-semibold">
            {sidenav}
          </Text>
        </div>
        <div className="h-auto text-white px-4 pt-8">
          <div>{children}</div>
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
};
