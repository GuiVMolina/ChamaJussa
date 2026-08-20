import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";
import { Colors } from "@/src/constants/theme";
import AddIcon from "@/assets/svg/AddIcon.svg";
import BellIcon from "@/assets/svg/BellIcon.svg";
import ListIcon from "@/assets/svg/ListIcon.svg";
import ProfileIcon from "@/assets/svg/ProfileIcon.svg";

function TabIconWrapper({
  children,
  focused,
}: {
  children: React.ReactNode;
  focused: boolean;
}) {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: focused ? Colors.white : "transparent",
      }}
    >
      {children}
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.bgc2,
          borderColor: Colors.white,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 10,
        },
        tabBarActiveTintColor: Colors.red,
        tabBarInactiveTintColor: Colors.inactive,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "Montserrat_700Bold",
        },
      }}
    >
      <Tabs.Screen
        name="listaOS/index"
        options={{
          title: "Minhas OS",
          tabBarIcon: ({ color, focused }) => (
            <TabIconWrapper focused={focused}>
              <ListIcon fill={color} color={color} width={24} height={24} />
            </TabIconWrapper>
          ),
        }}
      />

      <Tabs.Screen
        name="criarOS/index"
        options={{
          title: "Criar OS",
          tabBarIcon: ({ color, focused }) => (
            <TabIconWrapper focused={focused}>
              <AddIcon fill={color} color={color} width={24} height={24} />
            </TabIconWrapper>
          ),
        }}
      />

      <Tabs.Screen
        name="notificacao/index"
        options={{
          title: "Notificações",
          tabBarIcon: ({ color, focused }) => (
            <TabIconWrapper focused={focused}>
              <BellIcon fill={color} color={color} width={24} height={24} />
            </TabIconWrapper>
          ),
        }}
      />

      <Tabs.Screen
        name="perfil/index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => (
            <TabIconWrapper focused={focused}>
              <ProfileIcon fill={color} color={color} width={24} height={24} />
            </TabIconWrapper>
          ),
        }}
      />

      <Tabs.Screen
        name="detalhe/index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
