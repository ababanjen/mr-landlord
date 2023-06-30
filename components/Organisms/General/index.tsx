import Text from '@/components/Atoms/Text';
import Box from '@/components/Molecules/Containers/Box';
import ContactDetailsForm from '@/components/Organisms/General/Forms/ContactDetails';
import ContactDetails from '@/components/Organisms/General/ContactDetails';
import { useState } from 'react';

const General = () => {
  const [editContact, setEditContact] = useState<boolean>(false);

  return (
    <div className="flex gap-2">
      <Box className="w-ful">
        <div className="flex flex-col">
          <div className="w-full mb-4">
            <Text as="h3" className="capitalize">
              Contact details
            </Text>
          </div>
          {editContact ? (
            <ContactDetailsForm onEdit={setEditContact} />
          ) : (
            <ContactDetails onEdit={setEditContact} />
          )}
        </div>
      </Box>
      <Box className="w-full">dasasd</Box>
    </div>
  );
};

export default General;
