import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: 'column'
   },
   banner: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    gap: 10,
    flex: 0.2
   },

   form: {
    marginTop: 20,
    backgroundColor: 'white',
    justifyContent: 'start',
    margin: 20,
    gap: 10,
    flex: 0.70
   },
   input: {
    fontSize: 30,
    padding: 4,
    borderColor: '#ccc',
    color: '#7a7a7a',
    borderRadius: 10,
    borderWidth: 2,
   },
   button: {
    backgroundColor: '#f57e42',
    borderRadius: 10,
    marginLeft: '20%',
    marginRight: '20%',
    margin: '10%',
    text: {
        color: '#fff',
        padding: 10,
        fontSize: 32,
        textAlign: 'center'
    }
   },

   h1: {
    color: '#ffffff',
    fontSize: 25,
    textCenter: {
        color: '#ffffff',
        fontSize: '200%',
        textAlign: 'center'
    }
   }
});
export default styles;