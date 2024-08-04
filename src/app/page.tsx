import ClientSide from "@/components/clientSide";
import styles from "./page.module.css";
import ServerSide from "@/components/serverSide";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}></div>
      <ServerSide />
      <ClientSide />
    </main>
  );
}
