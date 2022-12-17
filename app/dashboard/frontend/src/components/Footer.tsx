import {
  BoxProps,
  Button,
  chakra,
  HStack,
  IconButton,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { Link as RouteLink, useLocation } from "react-router-dom";

const RouterLink = chakra(RouteLink);
const DarkIcon = chakra(MoonIcon, {
  baseStyle: {
    w: "4",
    h: "4",
  },
});
const LightIcon = chakra(SunIcon, {
  baseStyle: {
    w: "4",
    h: "4",
  },
});

export const Footer: FC<BoxProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  return (
    <HStack w="full" px="3" py="5" position="relative" {...props}>
      {location.pathname !== "/login" && (
        <RouterLink to="/login" left="1rem" position="absolute">
          <Button size="sm">Log out</Button>
        </RouterLink>
      )}
      <Text
        display="inline-block"
        flexGrow={1}
        textAlign="center"
        color="gray.400"
      >
        Made with ❤️ in{" "}
        <Link color="blue.400" href="https://github.com/gozargah">
          Gozargah
        </Link>
      </Text>
      <IconButton
        size="sm"
        aria-label="switch theme"
        onClick={toggleColorMode}
        position="absolute"
        right="1rem"
      >
        {colorMode === "light" ? <DarkIcon /> : <LightIcon />}
      </IconButton>
    </HStack>
  );
};
