import { BlurView } from "expo-blur";
import { Dimensions, Text } from "react-native"
import styled from "styled-components/native"

export const Navigation = () => {

    const screenWidth = Dimensions.get('window').width;

    return (
        <BlurView style={{
            position: 'absolute',
            left: 20,
            bottom: 5,
            width: screenWidth - 40,
            padding: 10,
            paddingTop: 25,
            paddingBottom: 25,
            overflow: 'hidden',
            borderRadius: 40,
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }}
        intensity={35}
        tint="default"
        >
            <Text style={{ color: '#fff' }}>Navigation</Text>
        </BlurView>
    )
}