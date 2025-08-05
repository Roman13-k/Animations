import React from "react";
import RainbowButton from "../ui/shared/buttons/RainbowButton/RainbowButton";
import PulsButton from "../ui/shared/buttons/PulsButton/PulsButton";
import HoverBgButtons from "../ui/shared/buttons/HoverBgButtons/HoverBgButtons";
import FlipButton from "../ui/shared/buttons/flipButton/FlipButton";

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
