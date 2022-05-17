import {
  BoxProps,
  HStack,
  LinkBox,
  LinkOverlay,
  Portal,
  PortalManager,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { PATHS } from "../../types";
import { Icon } from "../Icon";

type Props = {
  navHeight: BoxProps["h"];
};

export const NavBar: React.FC<Props> = ({ navHeight }) => {
  return (
    <PortalManager zIndex={999}>
      <Portal>
        <HStack
          h={navHeight}
          px="16"
          py="2"
          alignItems="center"
          justifyContent="center"
        >
          <LinkBox>
            <ReactLink to={PATHS.INDEX}>
              <Icon size="28" name="logo" />
            </ReactLink>
          </LinkBox>
        </HStack>
      </Portal>
    </PortalManager>
  );
};
