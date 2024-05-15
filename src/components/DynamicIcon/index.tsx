import { IconProps } from "phosphor-react";
import { IconContainer } from "./styles";

interface DynamicIconProps extends IconProps {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export default function DynamicIcon({
  icon: Icon,
  color,
  size,
}: DynamicIconProps) {
  return (
    <IconContainer color={color}>
      <Icon size={size} weight="fill" />
    </IconContainer>
  );
}
