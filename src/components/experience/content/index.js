import React, { useEffect, useState } from "react";
import styles from "../styles.module.css";
import {
  Grid,
  TableContainer,
  TableRow,
  TableHead,
  Table,
} from "@mui/material";
const TableExperience = ({ dataExperience }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <TableContainer>
        <Table>
          <TableHead className={styles.titleContent}>
            {dataExperience?.header}
            {dataExperience?.dataContent?.map((e, index) => {
              return (
                <TableRow key={index} className={styles.content}>
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
