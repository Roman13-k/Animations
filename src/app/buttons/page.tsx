import ButtonsScreen from "@/components/screens/ButtonsScreen";
import HeavyScreen from "@/components/screens/HeavyScreen";
import Container from "@/components/ui/layout/container/Container";
import React from "react";

export default function page() {
  return (
    <section>
      <Container>
        <ButtonsScreen />
        <HeavyScreen />
      </Container>
    </section>
  );
}
