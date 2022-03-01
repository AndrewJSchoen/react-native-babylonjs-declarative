import React, { useState, FunctionComponent, useEffect, useCallback } from 'react';
import { SafeAreaView, StatusBar, Button, View, Text, ViewProps, Image } from 'react-native';

import { useEngine, EngineView } from '@babylonjs/react-native';
import { Engine, Scene, Camera } from '@babylonjs/core';
import '@babylonjs/loaders';
// import Slider from '@react-native-community/slider';

export const EngineScreen = (props) => {
  
    const engine = useEngine();
    const [camera, setCamera] = useState();

    useEffect(() => {
        if (engine) {
            const scene = new Scene(engine);
            scene.createDefaultCamera(true);
            setCamera(scene.activeCamera);
            // Setup the scene!
        }
    }, [engine]);

    const textValue = "hi!"

    return (
        <View style={props.style}>
           {/* <EngineView style={{flex: 1}} camera={camera} /> */}
        </View>
    );
  };