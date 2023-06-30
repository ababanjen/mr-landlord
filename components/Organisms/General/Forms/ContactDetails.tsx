'use client';
import Form from '@/components/Atoms/Form';
import InputLabel from '@/components/Molecules/InputLabel';
import Button from '@/components/Atoms/Button';
import useStore from '@/hooks/global/useStore';
import { useState } from 'react';
import { ContactDetailsTypes } from '@/components/Organisms/General/ContactDetails';

const ContactDetails = ({ onEdit }: ContactDetailsTypes) => {
  const { general, setGeneralContact } = useStore((state) => state, ['admin']);
  const [contact, setContact] = useState(general.contact);

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setContact({ ...contact, [name]: value });

  const onSubmit = () => {
    setGeneralContact(contact);
    onEdit(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <InputLabel
            className="w-full"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
            required
          >
            First name
          </InputLabel>
          <InputLabel
            className="w-full"
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
            required
          >
            Last name
          </InputLabel>
        </div>
        <div className="w-full">
          <InputLabel
            className="w-full"
            name="address"
            value={contact.address}
            onChange={handleChange}
            required
          >
            Address
          </InputLabel>
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <InputLabel
            className="w-full"
            name="state"
            value={contact.state}
            onChange={handleChange}
            required
          >
            State/Province
          </InputLabel>
          <InputLabel
            className="w-full"
            name="zipCode"
            value={contact.zipCode}
            onChange={handleChange}
            type="number"
            required
          >
            Postal/Zip code
          </InputLabel>
          <InputLabel
            className="w-full"
            name="country"
            value={contact.country}
            onChange={handleChange}
            required
          >
            Country
          </InputLabel>
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <InputLabel
            className="w-[7rem]"
            name="countryCode"
            value={contact.countryCode}
            onChange={handleChange}
            required
          >
            Country code
          </InputLabel>
          <InputLabel
            className="w-full"
            name="phone"
            type="number"
            value={contact.phone}
            onChange={handleChange}
            required
          >
            Phone/Mobile number
          </InputLabel>
        </div>
        <div className="w-full">
          <InputLabel
            className="w-full"
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          >
            Email address
          </InputLabel>
        </div>
        <div className="w-full flex justify-end mt-6">
          <Button type="submit">Save</Button>
        </div>
      </div>
    </Form>
  );
};

export default ContactDetails;
