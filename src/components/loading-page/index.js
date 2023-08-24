import { useState, useEffect } from "react";
import styles from "./styles.module.css";
export default function Loading({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <div className={styles.container}>
      <div className={styles.spinnerBox}>
        <div className={styles.threeQuarterSpinner}></div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
}
