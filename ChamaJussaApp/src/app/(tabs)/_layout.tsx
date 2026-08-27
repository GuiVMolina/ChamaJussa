import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useTheme } from "@/src/contexts/ThemeContext";

import AddIcon from "@/assets/svg/AddIcon.svg";
import BellIcon from "@/assets/svg/BellIcon.svg";
import ListIcon from "@/assets/svg/ListIcon.svg";
import ProfileIcon from "@/assets/svg/ProfileIcon.svg";

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: [styles.tabBar, { backgroundColor: colors.main }],
          tabBarItemStyle: styles.tabBarItem,
          tabBarActiveTintColor: colors.main,
          tabBarInactiveTintColor: colors.white,
          tabBarActiveBackgroundColor: colors.white,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tabs.Screen
          name="listaOS/index"
          options={{
            title: "Minhas OS",
            tabBarIcon: ({ color }) => (
              <ListIcon color={color} width={24} height={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="criarOS/index"
          options={{
            title: "Criar OS",
            tabBarIcon: ({ color }) => (
              <AddIcon color={color} width={24} height={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="notificacao/index"
          options={{
            title: "Notificação",
            tabBarIcon: ({ color }) => (
              <BellIcon color={color} width={24} height={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="perfil/index"
          options={{
            title: "Perfil",
            tabBarIcon: ({ color }) => (
              <ProfileIcon color={color} width={24} height={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="detalhe/[id]"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabBarItem: {
    borderRadius: 16,
    marginHorizontal: 8,
    overflow: "hidden",
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: "Montserrat_700Bold",
  },
});
