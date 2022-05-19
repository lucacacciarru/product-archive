import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import coverHero from "./assets/coverHero.jpg";

export const Hero: React.FC = () => {
  return (
    <HStack
      h="80vh"
      w="full"
      borderRadius="xl"
      bg="brand.primary.regular"
      px="20"
      justifyContent="space-between"
    >
      <Stack w="50%">
        <Text textStyle="main" color="white.0">
          Trova tutto ciò che ti serve
        </Text>
        <Text color="white.0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          perferendis odio repudiandae labore accusamus iure velit ea quidem ab
          quaerat!
        </Text>
      </Stack>
      <Box w="50%" h="70%" overflow="hidden">
        <Image src={coverHero} w="full" h="full" objectFit="cover" />
      </Box>
    </HStack>
  );
};
