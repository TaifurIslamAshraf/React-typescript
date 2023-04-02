import { CSSProperties } from "react";

type styleProps = {
  style: CSSProperties;
};

const StylePropsTypes = (props: styleProps) => {
  return <div style={props.style}>StylePropsTypes</div>;
};

export default StylePropsTypes;
