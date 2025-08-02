import React from "react";
import RainbowButton from "../ui/buttons/RainbowButton/RainbowButton";
import PulsButton from "../ui/buttons/PulsButton/PulsButton";
import HoverBgButtons from "../ui/buttons/HoverBgButtons/HoverBgButtons";

export default function ButtonsScreen() {
  return (
    <>
      <RainbowButton />
      <HoverBgButtons />
      <PulsButton />
    </>
  );
}
