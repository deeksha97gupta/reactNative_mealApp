import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform } from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const defaultNavStackOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    },
    headerTintColor: Platform.OS ==='android' ? 'white' : Colors.primary,
};

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        initialRouteName: 'Meal Categories',
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primary
            },
            headerTintColor: 'white' 
        },
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailsScreen,
},
{
    mode: 'modal',
    defaultNavigationOptions: defaultNavStackOptions 
});

const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealDetailsScreen,
},
{
    mode: 'modal',
    defaultNavigationOptions: defaultNavStackOptions
});

const tabScreenConfig = {
    Meals: { screen: MealsNavigator, 
        navigationOptions: {
        tabBarIcon: (tabInfo) => {
           return <Ionicons name='ios-restaurants' size={25} color={tabInfo.activeTintColor} />
        },
        tabBarColor: Colors.primary
    }},
    Favorites: { screen: FavNavigator,
        navigationOptions: {
         tabBarLabel: 'Favorites!',   
         tabBarIcon: (tabInfo) => {
             return <Ionicons name='ios-star' size={25} color={tabInfo.activeTintColor} />
          },
         tabBarColor: Colors.accent  
     }}
 };

const MealFavTabNavigator = Platform.OS === 'android' ? 
 createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true,
 }) :
 createBottomTabNavigator (tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.accent,
    }
});

export default createAppContainer(MealFavTabNavigator);