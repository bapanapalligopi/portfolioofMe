import { TbSql } from "react-icons/tb";
import { TbBrandMysql } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";

const dbskills = {
  sql: ["SQL", <TbSql key="db" color="orange" fontSize="6rem"></TbSql>],
  mysql: [
    "MYSQL",
    <TbBrandMysql key="db" color="green" fontSize="6rem"></TbBrandMysql>,
  ],
  oracle: [
    "ORACLE",
    <GrOracle key="db" color="red" fontSize="6rem"></GrOracle>,
  ],
  postgresql: [
    "POSTGRE SQL",
    <SiPostgresql key="db" color="yellow" fontSize="6rem"></SiPostgresql>,
  ],
};
export default dbskills;
