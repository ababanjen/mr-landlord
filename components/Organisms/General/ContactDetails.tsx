'use client';
import Text from '@/components/Atoms/Text';
import EmailIcon from '@/components/Atoms/Icons/Email';
import PhoneIcon from '@/components/Atoms/Icons/Phone';
import PencilIcon from '@/components/Atoms/Icons/Pencil';
import useStore from '@/hooks/global/useStore';

const ContactDetails = ({ onEdit }: ContactDetailsTypes) => {
  const {
    contact: {
      firstName,
      lastName,
      address,
      state,
      zipCode,
      country,
      countryCode,
      phone,
      email,
    },
  } = useStore((state) => state.general, ['admin']);
  return (
    <div className="relative px-4">
      <div className="absolute cursor-pointer right-[14px]" onClick={onEdit}>
        <PencilIcon className="hover:fill-current w-5" />
      </div>
      <div className="flex flex-col">
        <Text className="font-semibold">{`${firstName} ${lastName}`}</Text>
        <Text>{`${address}, ${zipCode} ${state}`}</Text>
        <Text>{country}</Text>
        <span className="flex gap-1 items-center">
          <EmailIcon className="w-5 h-5" />
          <Text>{email}</Text>
        </span>
        <span className="flex gap-1 items-center">
          <PhoneIcon className="w-5 h-5" />
          <Text>{`(${countryCode}) ${phone}`}</Text>
        </span>
      </div>
    </div>
  );
};

export default ContactDetails;

export type ContactDetailsTypes = {
  onEdit: ([...arg]: any) => void;
};
