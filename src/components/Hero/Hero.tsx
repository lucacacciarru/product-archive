import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import coverHero from "./assets/coverHero.jpg";

export const Hero: React.FC = () => {
  return (
    <HStack
      h={{ base: "auto", xl: "80vh" }}
      w="full"
      borderRadius="xl"
      bg="brand.primary.regular"
      px={{ base: "6", xl: "20" }}
      py="14"
      gap="6"
      justifyContent="space-between"
      flexDir={{ base: "column", xl: "row" }}
    >
      <Stack w={{ base: "100%", xl: "50%" }}>
        <Text textStyle="main" color="white.0">
          Find whatever you want
        </Text>
        <Text color="white.0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          perferendis odio repudiandae labore accusamus iure velit ea quidem ab
          quaerat!
        </Text>
      </Stack>
      <Box h="70%" w={{ base: "100%", xl: "50%" }} overflow="hidden">
        <Image src={coverHero} w="full" h="full" objectFit="cover" />
      </Box>
    </HStack>
  );
};
