import Text from "@/components/Atoms/Text";
import { twMerge } from "tailwind-merge";

const CopyRight = ({ className = "" }: CopyRightProps) => {
  const storeName = "Pizza Express"; //TODO

  const classes = twMerge("text-xs", className);

  return (
    <Text className={classes}>
      FoodTronix {storeName} &#169; {new Date().getFullYear()}
    </Text>
  );
};

export default CopyRight;

export type CopyRightProps = {
  className?: string;
};
