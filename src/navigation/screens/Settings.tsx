import { Text } from "@react-navigation/elements";
import { StyleSheet, View, ScrollView, RefreshControl } from "react-native";

export function Settings() {
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
      >
        <Text style={styles.text}>Empty List</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  text: {
    width: "100%",
    padding: 10,
  },
});
