import { FormControl, FormLabel } from "@chakra-ui/react";

export const InputContainer: React.FC<{ label: string }> = ({
  label,
  children,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      {children}
    </FormControl>
  );
};
