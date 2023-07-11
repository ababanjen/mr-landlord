"use client";

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useState } from "react";
import Text from "@/components/Atoms/Text";
import EmailIcon from "@/components/Atoms/Icons/Email";
import PhoneIcon from "@/components/Atoms/Icons/Phone";
import PencilIcon from "@/components/Atoms/Icons/Pencil";
import useStore from "@/hooks/global/useStore";
import Container, {
  Draggable,
} from "@/components/Molecules/Containers/Draggable";
// import { Draggable } from "@/components/Molecules/Containers/Draggable/Draggable";

export type ContactDetailsTypes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEdit: ([...arg]: any) => void;
};

const ContactDetails = ({ onEdit }: ContactDetailsTypes) => {
  const [test, setTest] = useState([
    {
      id: "new",
      val: "I am new",
    },
    {
      id: "old",
      val: "I am old",
    },
  ]);
  const {
    contact: {
      firstName,
      lastName,
      address,
      state: city,
      zipCode,
      country,
      countryCode,
      phone,
      email,
    },
  } = useStore(state => state.general, ["admin"]);

  const onDrop = (e: any, d: any, status: string) =>
    setTest(
      test.map(t => {
        if (t.id === d) {
          return { ...t, id: status };
        }
        return t;
      })
    );

  return (
    <div className="relative px-4">
      {test.map((val, i) => (
        // eslint-disable-next-line sonarjs/no-extra-arguments
        <Container onDrop={(e, data) => onDrop(e, data, val.id)} key={val.id}>
          <section>
            <Draggable id={`${val.id}+${i}`}>
              <div>{val.id}</div>
              <div className="w-full shadow rounded">{val.val}</div>
            </Draggable>
          </section>
        </Container>
      ))}
      <div
        className="absolute cursor-pointer right-[14px]"
        onClick={onEdit}
        aria-hidden="true"
      >
        <PencilIcon className="hover:fill-current w-5" />
      </div>
      <div className="flex flex-col">
        <Text className="font-semibold capitalize">{`${firstName} ${lastName}`}</Text>
        <Text>{`${address}, ${zipCode} ${city}`}</Text>
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
