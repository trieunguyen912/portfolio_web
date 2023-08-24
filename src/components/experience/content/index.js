import React, { useEffect, useState } from "react";
import styles from "../styles.module.css";
import {
  Grid,
  TableContainer,
  TableRow,
  TableHead,
  Table,
} from "@mui/material";
import "aos/dist/aos.css";
import Aos from "aos";
const TableExperience = ({ dataExperience }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    mounted && (
      <TableContainer>
        <Table>
          <TableHead className={styles.titleContent}>
            {dataExperience?.header}
            {dataExperience?.dataContent?.map((e, index) => {
              return (
                <TableRow
                  key={index}
                  className={styles.content}
                  data-aos="fade-up"
                >
                  {e?.content}
                </TableRow>
              );
            })}
          </TableHead>
        </Table>
      </TableContainer>
    )
  );
};

export default TableExperience;
