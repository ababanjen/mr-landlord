/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { twMerge } from "tailwind-merge";
import Text from "@/components/Atoms/Text";

export type CopyRightProps = {
  className?: string;
};

const CopyRight = ({ className = "" }: CopyRightProps) => {
  const storeName = "Pizza Express"; // TODO

  const classes = twMerge("text-xs", className);

  return (
    <Text className={classes}>
      FoodTronix {storeName} &#169; {new Date().getFullYear()}
    </Text>
  );
};

export default CopyRight;
