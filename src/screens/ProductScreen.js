
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ProductSlice } from '../store/ProductSlice';



function ProductScreen() {
    
    const navigation = useNavigation();
    const products = useSelector(state=>state.products.products) 
    const dispatch = useDispatch()

    return (
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <Pressable onPress={()=>{
                        dispatch(ProductSlice.actions.setSelected(item.id))
                        navigation.navigate('Product Details');
                    }} style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image}/>
                    </Pressable>
                )}
                numColumns={2}
            />
    )
}
const styles = StyleSheet.create({
    itemContainer: {
        width: "50%",
        padding: 1
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
});

export default ProductScreen