import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";
import { Stack } from "expo-router";

import { RecipesProvider } from "@/context/RecipesContext";

const RootLayout = () => {
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);

  return (
    <RecipesProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="recipe/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </RecipesProvider>
  );
};

export default RootLayout;
