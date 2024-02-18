import { View, Text } from "react-native";
import React from "react";

export default function Card({
  children,
  className,
  width,
  height,
}: {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
}) {
  return (
    <View
      className={`bg-card ${width ? width : "w-[30vw]"} ${
        height ? height : "h-[80px]"
      } rounded-2xl flex justify-center items-center m-1 ${className}`}
    >
      {children}
    </View>
  );
}
