import React, { ReactNode } from "react";
import { CSS } from "@stitches/react/types/css-util";
import { StyledHeading } from "./Heading.styled";

type HeadingElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
interface HeadingProps {
  as?: HeadingElements;
  css?: CSS;
  isHidden?: boolean;
  children: ReactNode | ReactNode[];
}

const Heading: React.FC<HeadingProps> = ({
  as = "h2",
  css = {},
  isHidden = false,
  children,
}) => (
  <StyledHeading as={as} isHidden={isHidden} data-level={as} css={css}>
    <>{children}</>
  </StyledHeading>
);

export default Heading;
