/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useState } from "react";
import Text from "@/components/Atoms/Text";
import Box from "@/components/Molecules/Containers/Box";
import ContactDetailsForm from "@/components/Organisms/General/Forms/ContactDetails";
import ContactDetails from "@/components/Organisms/General/ContactDetails";

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
    </div>
  );
};

export default General;
