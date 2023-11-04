import React, { useRef, useState } from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import AntDesign from "@expo/vector-icons/AntDesign"
import { DropdownList } from "./styles"
import { IDropdownRef } from "react-native-element-dropdown"

const data = [
  { label: "Masculino", value: "M" },
  { label: "Feminino", value: "F" },
] as ItensProps[]

interface Props {
  placeholderDrop: string
  item: {}
}

interface ItensProps {
  label: string
  value: string
}

export const DropdownComponent = ({ placeholderDrop, item }: Props) => {
  const [value, setValue] = useState<string>()
  const ref = useRef<IDropdownRef>(null)

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    )
  }
  console.log(value)
  return (
    <DropdownList
      ref={ref}
      data={data}
      // search
      // searchPlaceholder="Search..."
      labelField="label"
      valueField="value"
      placeholder={placeholderDrop}
      value={value}
      onChange={item => {
        setValue(item.value)
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      )}
      renderItem={renderItem}
    />
   
  )
}


const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  dropdown: {
    flex: 1,
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  button: {
    marginHorizontal: 16,
  },
})
