import { BiLogoSpringBoot } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { SiApachekafka } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaAws } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiIntellijidea } from "react-icons/si";

const allskills = {
  springboot: [
    "SpringBoot",
    <BiLogoSpringBoot key="framework" color="white" fontSize="6rem" />,
  ],
  redis: ["Redis", <DiRedis key="framework" color="red" fontSize="6rem" />],
  kafka: [
    "Kafka",
    <SiApachekafka key="framework" color="pink" fontSize="6rem" />,
  ],
  restapi: [
    "Rest API'S",
    <TbApi key="framework" color="green" fontSize="6rem" />,
  ],
  aws: ["AWS", <FaAws key="framework" color="white" fontSize="6rem" />],
  gitgub: [
    "GIT",
    <FaGithubSquare key="framework" color="violet" fontSize="6rem" />,
  ],
  vscode: [
    "VS CODE",
    <TbBrandVscode key="framework" color="orange" fontSize="6rem" />,
  ],
  intellij: [
    "Intellij",
    <SiIntellijidea key="framework" color="whitesmoke" fontSize="6rem" />,
  ],
};
export default allskills;
