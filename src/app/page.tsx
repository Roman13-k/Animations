import ButtonsScreen from "@/components/screens/ButtonsScreen";
import styles from "./page.module.css";
import HeavyScreen from "@/components/screens/HeavyScreen";

export default function Home() {
  return (
    <section className={styles.page}>
      <ButtonsScreen />
      <HeavyScreen />
    </section>
  );
}
