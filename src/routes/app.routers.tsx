import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { SignIn } from "../screens/signIn"
import { RegisterNutritionists } from "../screens/register/nutritionists"
import { RegisterPatients } from "../screens/register/pacients"

const { Screen, Navigator } = createNativeStackNavigator()

export function RoutersApp() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="SignIn"
          component={SignIn}
          options={{ 
            headerShown: false, 
          }}
          />
        <Screen
          name="RegisterNutritionists"
          component={RegisterNutritionists}
          options={{ 
            headerBackTitleVisible: false,
            headerTintColor: "#65717B",
            headerTitle: 'Registro Nutricionista',
            headerTransparent: true,
            headerStyle: {backgroundColor: "#F0F2F5"},
          }}
        />
        <Screen
          name="RegisterPatients"
          component={RegisterPatients}
          options={{ 
            headerBackTitleVisible: false,
            headerTintColor: "#65717B",
            headerTitle: 'Registro Paciente',
            headerTransparent: true,
            headerStyle: {backgroundColor: "#FFFFFF"},
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
