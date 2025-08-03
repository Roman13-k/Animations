import React from "react";
import RainbowButton from "../ui/buttons/RainbowButton/RainbowButton";
import PulsButton from "../ui/buttons/PulsButton/PulsButton";
import HoverBgButtons from "../ui/buttons/HoverBgButtons/HoverBgButtons";
import FlipButton from "../ui/buttons/flipButton/FlipButton";

export default function ButtonsScreen() {
  return (
    <>
      <RainbowButton />
      <HoverBgButtons />
      <PulsButton />
      <FlipButton />
    </>
  );
}
