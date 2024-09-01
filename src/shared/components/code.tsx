// import { FaCopy } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeShareProps {
	children: string;
	language?: string;
}

export const CodeShared = ({
	children,
	language = "javascript",
}: CodeShareProps) => {
	return (
		<div className="mt-2 relative">
			{/* <div className="absolute top-3 right-3 cursor-pointer border border-white p-2 rounded-full">
				<FaCopy className="fill-white" />
			</div> */}
			<SyntaxHighlighter language={language} style={atomOneDarkReasonable}>
				{children}
			</SyntaxHighlighter>
		</div>
	);
};
