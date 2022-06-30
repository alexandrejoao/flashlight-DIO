import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Touch from 'react-native-touch';
import RNShake from 'react-native-shake';


const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(olftoggle => !olftoggle);

  useEffect(() =>  {
    // Ativar flash do celular
    //Alert.alert(`Atualizou o componente ${toggle}`);
    Touch.switchState(toggle);
    //console.log('Trocou o flash da lanterna');
  }, [toggle]);

  useEffect(() =>  {
    /**
     * Quando o celular for achocalhado mudaremos o toggle. 
     */
      const subscription = RNShake.addListener(() => {
        setToggle(olftoggle => !olftoggle);
      });
      // Essa função vai ser chamada quando o componente for desmontado.
      return () => subscription.remove();
  }, []);

  return <view style={toggle ? style.containerLight : style.container}> 

  <TouchableOpacity onPress = {handleChangeToggle} >
  <Image 
    style={toggle ? style.lightingOn : style.lightingOff}
    source={
      toggle
      ?  require('./assets/icons/eco-light.png')
      :  require('./assets/icons/eco-light-off.png')
    } 
    />
  <Image 
    style={style.dioLogo}
    source={
      toggle
      ?  require('./assets/icons/logo-dio.png')
      :  require('./assets/icons/logo-dio-white.png')
    } 
    />
    </TouchableOpacity>
  </view>;
};

export default App;

const style = styleSheets.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },

});