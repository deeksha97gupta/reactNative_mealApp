import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
                   title={itemData.item.title} 
                   Color={itemData.item.color}
                   onSelect = {() => {
                        props.navigation.navigate({ 
                            routeName: 'CategoryMeals',
                            params: {
                                categoryId: itemData.item.id
                            }
                        })
                    }}
                />;
    };
    return (
        <FlatList
           keyExtractor={(item, index) => item.id}
           data={CATEGORIES}
           renderItem={renderGridItem}
           numColumns={2}   
        />
        /* <View style={styles.screen}>
            <Text>The Categories Screen!</Text>
            <Button title="Go to Meals" onPress = {() => {
                props.navigation.navigate({routeName: 'CategoryMeals'});
                // props.navigation.push('CategoryMeals');
                // props.navigation.replace('CategoryMeals'); //when you want to replace instead of pushing (No go back here)
            }}/>
        </View> */
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoriesScreen;