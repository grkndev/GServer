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
      className={`flex justify-center items-center bg-card p-4 rounded-2xl m-1 ${className}`}
    >
      {children}
    </View>
  );
}
