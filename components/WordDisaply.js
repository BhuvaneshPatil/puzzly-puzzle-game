import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";

const WordDisaply = ({ word, indexToHide }) => {
	let displayWord = "";
	for (let i = 0; i < word.length; i++) {
		if (i == indexToHide) {
			displayWord += "_";
			continue;
		}
		displayWord += word[i];
	}
	return (
		<Heading
			color={"gray.200"}
			letterSpacing="15px"
			fontSize="6xl"
			textTransform="uppercase"
		>
			{displayWord.toUpperCase()}
			{word}
		</Heading>
	);
};

export default WordDisaply;
