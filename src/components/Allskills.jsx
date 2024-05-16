import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandReact } from "react-icons/tb";
import { GiMaterialsScience } from "react-icons/gi";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoFigma } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";

const allskills = {
  html: ["Html", <FaHtml5 key="python" color="red" fontSize="6rem" />],
  css: ["Css", <SiCss3 key="css" color="yellow" fontSize="6rem" />],
  javascript: [
    "JavaScript",
    <TbBrandJavascript key="js" color="green" fontSize="6rem" />,
  ],
  react: [
    "React Js",
    <TbBrandReact key="react Js" color="pink" fontSize="6rem" />,
  ],
  materialui: [
    "Material Ui",
    <GiMaterialsScience key="ui" color="violet" fontSize="6rem" />,
  ],
  bootstrap: [
    "Bootstrap",
    <FaBootstrap key="bootstrap" color="orange" fontSize="6rem" />,
  ],
  figma: ["Figma", <BiLogoFigma key="figma" color="blue" fontSize="6rem" />],
  wordpress: [
    "Wordpress",
    <FaWordpress key="wordpress" color="white" fontSize="6rem" />,
  ],
};
export default allskills;
