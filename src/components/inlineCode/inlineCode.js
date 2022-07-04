import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const InlineCode = ({ children }) => {
  return (
    <Highlight {...defaultProps} code={children} language="javascript">
      {({ className, style }) => (
        <code className={className} style={{ ...style, padding: "2px" }}>
          {children}
        </code>
      )}
    </Highlight>
  );
};

export default InlineCode;