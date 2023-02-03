import { extendTheme } from "@chakra-ui/react";

const config = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};

const fonts = {
	body: 'Poppins, sans-serif',
	heading: 'Poppins, sans-serif',
};

const theme = extendTheme({ config, fonts });

export default theme;
