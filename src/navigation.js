import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from "react-native";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ProductScreen from "./screens/ProductScreen";
import ShoppingCart from "./screens/ShoppinCart";

// Material UI Icons

const Stack = createNativeStackNavigator();

const Navigation = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{contentStyle:{
                backgroundColor: "whitesmoke"
            }}}>
                <Stack.Screen
                    name="Products"
                    component={ProductScreen}
                    options={({navigation})=>({
                        headerRight: () => (
                            <Pressable
                                style={{ flexDirection: "row", gap: 10, }}
                                onPress={()=>navigation.navigate('Cart')}
                                >
                                <Text>CART</Text>
                            </Pressable>
                        )
                    })}
                />
                <Stack.Screen name="Product Details"
                    component={ProductDetailScreen}
                />
                <Stack.Screen name="Cart" component={ShoppingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation