import React , {Component} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Image,Button,Dimensions } from 'react-native';


export  class ProductDetails extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = { count: 0,
      };
    
    }

   
  
  
  // const Content = (props) => {
    render() {
      // In the render method, we destructure the rangelow property from this.state and render it inside an h1
     const { counter } = this.state
     
      
    return (
      
      
      <View style={{flex:1,backgroundColor:'#1F456E',marginTop:40,borderTopRightRadius:25,borderTopLeftRadius:25}}>
     
        <View style={{flex:1}}>
       
      <Text style={{fontSize:30,marginLeft:20,marginTop:10,color:'white'}}>200$</Text> 
      <Text style={{fontSize:20,marginLeft:20,marginTop:4,color:'white'}}>Colorful Textile</Text> 
      <Text style={{fontSize:15,marginLeft:20,marginTop:4,color:'white'}}>Thekdzfjksjdfksdjfksdfjksdfjsdkf
      
      sdfjhsdfhsdfhsdkfhskdfdfnsdvnchdskfhkdfnsdvn
      </Text> 
      
  
  
      <Text style={{fontSize:15,marginLeft:20,marginTop:4,color:'white'}}> ----------------------------------------------------------------------------------
      </Text>
      {/* <Text style={{fontSize:35,alignSelf:'center',marginTop:5,color:'white'}}> {"<"} 6   <Text style={{fontSize:50}}>7</Text>  7.5 {">"}</Text> */}
      <View style={{flexDirection:'row',justifyContent:'center'}} >
      <TouchableOpacity onPress ={ () => {
      this.setState({
        count: this.state.count+1
      })
    }}>    
      
     <Text style={plus.col}>+</Text>
    
     
     </TouchableOpacity>
     <TouchableOpacity  onPress ={ () => {
  
       if(this.state.count<=0){
        this.state.count=1;
  
       }
      
  
      this.setState({
        count: this.state.count-1
      })
    }}>    
     <Text style={plus.col}>-</Text>
    
  
     </TouchableOpacity>
     <Text style={plus.col}>
              { this.state.count} 
            </Text>
      </View>
      
  
  
      
      </View>
      
         <View style = {styles.container}>
          <TouchableOpacity>
             <Text style = {styles.text}>
               Add to Cart
             </Text>
          </TouchableOpacity>
          <View>
                <Button
                        title="Mycart"
                        onPress={() => this.props.navigation.navigate('Cart')}
                         />
            </View>
         
       </View>  
       </View>

      
    )
  }}
  export default ProductDetails




   const plus=StyleSheet.create({
     view:{
  
     },
    col:{
    alignSelf: 'center',
    fontSize:20,
    
    padding: 5,
    paddingLeft:10,
    paddingRight:10,
    color:'white',
    backgroundColor: '#fADD00'
  
     },

     
   })
  
  
    const styles = StyleSheet.create ({
      container: {
        flex:0.5,
         alignItems: 'center',
      },
      text: {
      
         padding: 15,
         paddingLeft:80,
         paddingRight:80,
         marginTop:10,
         borderRadius:30,
         color:'white',
         fontSize:20,
         
         backgroundColor: '#fADD00'
      }
   
   })
  
   const text=StyleSheet.create({
  Textprice:{
  
  
    
  }
  
  
  
  
  
   })
  