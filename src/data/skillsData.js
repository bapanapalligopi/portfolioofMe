import { 
  FaHtml5, FaBootstrap, FaWordpress, FaAws, FaGithubSquare, 
  FaDocker, FaLinux, FaBitbucket, FaServer, FaProjectDiagram,
  FaTerminal, FaCloudUploadAlt, FaRocket
} from "react-icons/fa";
import { 
  SiCss3, SiApachekafka, SiIntellijidea, SiPostman, 
  SiElasticsearch, SiEclipseide 
} from "react-icons/si";
import { 
  TbBrandJavascript, TbBrandReact, TbApi, TbBrandVscode 
} from "react-icons/tb";
import { GiMaterialsScience } from "react-icons/gi";
import { BiLogoFigma, BiLogoSpringBoot } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import { FaChartLine } from "react-icons/fa6";

export const skillsData = {
  programmingFrameworks: [
    { name: "Java", icon: DiJava, color: "#f89820" },
    { name: "Spring Boot", icon: BiLogoSpringBoot, color: "#6db33f" },
    { name: "Spring Projects", icon: BiLogoSpringBoot, color: "#6db33f" },
    { name: "J2EE", icon: FaServer, color: "#3a75b0" },
    { name: "React JS", icon: TbBrandReact, color: "#61dafb" },
    { name: "JavaScript", icon: TbBrandJavascript, color: "#f7df1e" },
    { name: "SDLC", icon: FaProjectDiagram, color: "#a855f7" }
  ],
  frontend: [
    { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
    { name: "CSS3", icon: SiCss3, color: "#1572b6" },
    { name: "Material UI", icon: GiMaterialsScience, color: "#007fff" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952b3" },
    { name: "Figma", icon: BiLogoFigma, color: "#f24e1e" },
    { name: "WordPress", icon: FaWordpress, color: "#21759b" }
  ],
  cloudDevops: [
    { name: "AWS", icon: FaAws, color: "#ff9900" },
    { name: "Docker", icon: FaDocker, color: "#2496ed" },
    { name: "Linux", icon: FaLinux, color: "#f5f5f5" },
    { name: "Git & GitHub", icon: FaGithubSquare, color: "#f05032" },
    { name: "BitBucket", icon: FaBitbucket, color: "#0052cc" }
  ],
  apisTools: [
    { name: "REST APIs", icon: TbApi, color: "#009688" },
    { name: "Kafka", icon: SiApachekafka, color: "#231f20" },
    { name: "Postman", icon: SiPostman, color: "#ff6c37" }
  ],
  monitoringLogging: [
    { name: "Elastic Search", icon: SiElasticsearch, color: "#005571" },
    { name: "HyperDx", icon: FaChartLine, color: "#ec4899" }
  ],
  utilitiesIdes: [
    { name: "VS Code", icon: TbBrandVscode, color: "#007acc" },
    { name: "IntelliJ", icon: SiIntellijidea, color: "#fe315d" },
    { name: "Eclipse", icon: SiEclipseide, color: "#2c2255" },
    { name: "MobaXterm", icon: FaTerminal, color: "#ea580c" },
    { name: "WinSCP", icon: FaCloudUploadAlt, color: "#2563eb" },
    { name: "Antigravity", icon: FaRocket, color: "#ec4899" }
  ]
};
