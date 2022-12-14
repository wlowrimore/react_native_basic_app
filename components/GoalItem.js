import { View, Text, Pressable, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#372154" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#24069dba",
  },

  goalText: {
    color: "white",
    padding: 8,
  },
});
