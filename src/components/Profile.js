import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs  } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { Stack, Flex } from "@chakra-ui/react";

function Profile() {
	return (
		<Stack>
			<Flex>
				<FaHtml5 size="3rem" />
				<FaCss3 size="3rem"/>
				<FaJs size="3rem"/>
				<FaReact size="3rem"/>

        <FaNodeJs size="3rem" />
        <SiMongodb size="3rem" />
        <SiExpress size="3rem" />

        <FaBootstrap size="3rem" />
			</Flex>
		</Stack>
	);
}

export default Profile;
