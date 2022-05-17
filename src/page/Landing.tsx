import { Stack } from "@chakra-ui/react";
import { Hero, ProductSection } from "../components";

export const Landing: React.FC = () => {
  return (
    <Stack gap="24">
      <Hero />
      <ProductSection />
    </Stack>
  );
};
