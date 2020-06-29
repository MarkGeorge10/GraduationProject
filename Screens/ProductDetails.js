import React , {Component} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Image,Button,Dimensions } from 'react-native';
import { calcRatio, calcWidth, calcHeight } from '../Dimension';

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
      
      <View style={{flex:1,flexDirection:'column'}}>
     
     <Image
                    style={{flex:1,width: calcWidth(150), height: calcHeight (150) ,alignItems:'center',alignSelf:'center',marginTop:30}}

                    source={require('../img/aaa.jpg')}

                />
  
      <View style={{flex:2,marginTop:25,backgroundColor:'#1F456E',borderTopRightRadius:25,borderTopLeftRadius:25}}>
      <View style={{flex:2}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       <Text style={{fontSize:30,marginLeft:20,marginTop:10,color:'white'}}>200$</Text>
<View style={{flexDirection:'row',marginRight:20,marginTop:14}}>
       <TouchableOpacity onPress ={ () => {
       this.setState({
         count: this.state.count+1
       })
     }}>    
       
      <Text style={plus.col}>+</Text>
     
      
      </TouchableOpacity>
      <Text style={plus.col}>
               { this.state.count} 
             </Text>
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
      </View>
      </View>
        
       <Text style={{fontSize:20,marginLeft:20,marginTop:4,color:'white'}}>Colorful Textile</Text> 
       <Text style={{fontSize:15,marginLeft:20,marginTop:4,color:'white'}}>Thekdzfjksjdfksdjfksdfjksdfjsdkf
       
       sdfjhsdfhsdfhsdkfhskdfdfnsdvnchdskfhkdfnsdvnghxdxxhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
      gggggggggggggggggggggggggggggggggggggggffsjewuiryweurhewuiy
       </Text> 
       
       
       
       
   
   
       <Text style={{fontSize:15,marginLeft:20,marginTop:4,color:'white'}}> ----------------------------------------------------------------------------------
       </Text>
    </View>
       {/* <Text style={{fontSize:35,alignSelf:'center',marginTop:5,color:'white'}}> {"<"} 6   <Text style={{fontSize:50}}>7</Text>  7.5 {">"}</Text> */}
       
       <View style={{flex:1,marginTop:85}} >
         {/* <View style={{flexDirection:'row',justifyContent:'center',marginBottom:3}}>
       <TouchableOpacity onPress ={ () => {
       this.setState({
         count: this.state.count+1
       })
     }}>    
       
      <Text style={plus.col}>+</Text>
     
      
      </TouchableOpacity>
      <Text style={plus.col}>
               { this.state.count} 
             </Text>
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
      

             </View>
         <View > */}
           <TouchableOpacity   onPress={() => this.props.navigation.navigate('Cart')}
           
           style={{ 
            alignItems: 'center'}}
           >
              <Text style = {styles.text}>
                Add to Cart
              </Text>
           </TouchableOpacity>
           
           {/* </View> */}


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
    
    alignItems: 'center',
    padding: 5,
    paddingLeft:10,
    paddingRight:10,
    color:'#535157',
    //backgroundColor: '#fADD00'
    backgroundColor: 'white'
     },

     
   })
  
  
    const styles = StyleSheet.create ({
      container: {
        marginBottom:15,
         alignItems: 'center',
      },
      text: {
      
         padding: 15,
         paddingLeft:80,
         paddingRight:80,
        
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
  