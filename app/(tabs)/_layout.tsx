import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff6e2",
        tabBarInactiveTintColor: "#fff6e2",
        headerStyle: {
          backgroundColor: "#a47a4b",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff6e2",
        tabBarStyle: {
          backgroundColor: "#a47a4b",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pâtissologie",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Mes Favoris",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bookmark-sharp" : "bookmark-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="pastries"
        options={{
          title: "Mes Pâtisseries",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "journal-sharp" : "journal-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
