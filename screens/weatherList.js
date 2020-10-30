import React, { Component } from 'react';
import {StyleSheet,View,Text,SectionList,ActivityIndicator} from 'react-native';
import  fetchActionCreator  from '../actionCreator/weatherActionCreator';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';

 class weatherList extends Component {

    constructor(props){
        super(props);
        this.state = {
         data:[],
         isConnected: false
        };
    }
    
   componentDidMount = () => { 
     console.log("data is persisted",this.props.data);  
    let zipCode = AsyncStorage.getItem('zipCode');
    console.log('isConnected',this.state.isConnected);
    NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        if (state.isConnected){
            console.log('fetch Data from api');
            this.props.fetchActionCreator(zipCode); 
        } else {
            console.log('fetch Data from store');
            this.props.requestPersistedForecastData();
        }
    });
    
    const unsubscribe = NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
    });
    unsubscribe();
   }
    render() {
        const forecastData = this.props.data;
        console.log("forecast list in render",forecastData);
        const error = this.props.error;
        const isLoading = this.props.isLoading;
        const isShowList = this.props.isShowList & (forecastData.length > 0);

        if (isLoading) {
            return (
              <View style={styles.container}>
                <ActivityIndicator size='large' color='#000' />
              </View>);
          };
        const DATA = [
            {
              title: " Day 1 ",
              data:forecastData.slice(0,8)
         
            },
            {
              title: " Day 2 ",
              data: forecastData.slice(8,16)
            },
            {
              title: " Day 3 ",
              data: forecastData.slice(16,24)
            },
            {
              title: " Day 4 ",
              data: forecastData.slice(24,32)
            },
            {
              title: " Day 5 ",
              data: forecastData.slice(32,40)
            },
          ];
        const SectionListItemSeparator = () => {
            return (
              <View style={styles.listItemSeparatorStyle} />
            );
          };
        return (
           <View>
               <View>
         { error!='' ? (
            <Text style={{fontSize: 30}}>Something Went Wrong!!Please try again.</Text>
         ): null }
       </View>
       <View>
       { isShowList ?(
       <SectionList 
           ItemSeparatorComponent={SectionListItemSeparator}
           sections={DATA}
           renderSectionHeader={({section}) => (
           <Text style={styles.sectionHeaderStyle}>
             {section.title}</Text>)}
              renderItem={({item}) => (
             <ListItem
                child1={item.weather[0].description}
                child2={"Humidity : "+item.main.humidity}
                child3={"Temperature : "+item.main.temp}
              />   
          )}
        keyExtractor={(item, index) => index}
        />):null}
       </View>
        
           </View>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    fetchActionCreator:(zipCode) => dispatch(fetchActionCreator(zipCode)),
    requestPersistedForecastData: () => dispatch({ type: "API_CALL_RESTORE" })
  });

const mapStateToProps = state => ({
    data: state.weather.weatherReports,
    error: state.weather.error,
    isShowList:state.weather.isShowList,
    isLoading:state.weather.isLoading
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(weatherList);

  
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
       justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    sectionHeaderStyle: {
        backgroundColor: '#0dc4cd',
        fontSize: 20,
        padding: 5,
        color: '#000',
      },
      sectionListItemStyle: {
        fontSize: 15,
        padding: 15,
        color: '#000',
        backgroundColor: '#F5F5F5',
      },
      listItemSeparatorStyle: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#0dc4cd',
      },

});