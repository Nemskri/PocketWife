import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    useWindowDimensions
} from "react-native"
import products from "../data/products"
import { useDispatch, useSelector } from "react-redux";
import { CartSlice } from "../store/CartSlice";

export default function ProductDetailScreen() {

    const { width } = useWindowDimensions();
    const dispatch = useDispatch();
    // const product = products[0];

    const product = useSelector((state)=>state.products.selectedProduct)

    // Add to cart 
    const addToCart = ()=>{
        dispatch(CartSlice.actions.addItem({product}))
    }

    return <>
        <View>
            {/* Image Corousal */}
            <ScrollView >
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }}
                            style={{ width: width, aspectRatio: 1, }} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    pagingEnabled
                />
                <View style={{ padding: 20 }}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>
            {/* Add to Cart Button */}
            <Pressable 
            onPress={addToCart}
            style={styles.button}>
                <Text style={styles.buttonText}>Add To Cart</Text>
            </Pressable>
            {/* Navigation Icon */}
        </View>
    </>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "900",
        marginVertical: 10,
        color: "blue",
    },
    price: {
        fontWeight: "600",
        fontSize: 20,
        letterSpacing: 1.25,
        color: "green"
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "400",
        marginBottom: 60,
    },
    button: {
        position: "absolute",
        backgroundColor: "blue",
        color: "white",
        bottom: 20,
        width: "90%",
        alignSelf: "center",
        padding: 10,
        borderRadius: 100,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        paddingHorizontal: 10,
        textAlign: "center",
    }

})
