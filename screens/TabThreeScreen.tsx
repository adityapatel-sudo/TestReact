import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from "../components/Themed";
import EditScreenInfo from "../components/EditScreenInfo";
import {MonoText} from "../components/StyledText";
import Colors from "../constants/Colors";
import * as WebBrowser from "expo-web-browser";



export default function TabThreeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View>
                <View style={styles.getStartedContainer}>
                    <Text
                        style={styles.getStartedText}
                        lightColor="rgba(0,0,0,0.8)"
                        darkColor="rgba(255,255,255,0.8)">
                        Open up the code for this screen:
                    </Text>

                    <View
                        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
                        darkColor="rgba(255,255,255,0.05)"
                        lightColor="rgba(0,0,0,0.05)">
                        <MonoText>{"/screens/TabTwoScreen.tsx"}</MonoText>
                    </View>

                    <Text
                        style={styles.getStartedText}
                        lightColor="rgba(0,0,0,0.8)"
                        darkColor="rgba(255,255,255,0.8 )">
                        Change any of the text, save the file, and your app will automatically update.
                    </Text>
                </View>

                <View style={styles.helpContainer}>
                    <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
                        <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                            Tap here if your app doesn't automatically update after making changes
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
});
