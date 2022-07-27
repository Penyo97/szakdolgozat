import React, {useEffect, useState} from 'react';
import {Dimensions, Keyboard, StyleSheet, View,Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient"
import {COLORS, SOCCOLORS} from "../AppAssets"
import {Card, TextInput, Paragraph, Checkbox} from "react-native-paper";
import {Button, SocialButton} from "../Components"


const Login = () => {

    const [checked, setChecked] = useState<Boolean>(false);
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <View>
            <LinearGradient colors={[COLORS.red, COLORS.yellow]} style={styles.linear}>
                <Paragraph style={styles.title}>Bejelentkezés</Paragraph>
                <Card style={styles.card}>
                    <Card.Content>
                        <Paragraph style={{color: "grey"}}>Azonosító vagy e-mail cím:</Paragraph>
                        <TextInput style={styles.input} underlineColor={COLORS.red} activeUnderlineColor={COLORS.red}
                                   value={mail}
                                   onChangeText={(text) => {
                                       setMail(text);
                                   }}/>
                        <Paragraph style={{paddingTop: 15, color: "grey"}}>Jelszó:</Paragraph>
                        <TextInput style={styles.input} right={<TextInput.Icon name={"eye"} style={{color: "gray"}}/>}
                                   underlineColor={COLORS.red} activeUnderlineColor={COLORS.red} value={password}
                                   onChangeText={(text) => {
                                       setPassword(text)
                                   }}/>
                        <Paragraph style={{paddingTop: 5, color: "grey", alignSelf: "flex-end"}}>Elfelejtett
                            jelszó</Paragraph>
                        <Checkbox.Item
                            label={"Emlékezz rám"}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            color={COLORS.red}
                            position={"leading"}
                            style={{width: "55%", paddingLeft: -10}}
                            labelStyle={{color: "grey", paddingLeft: -10}}
                        />
                        <Button buttonText={"bejelentkezés"} buttonColor={COLORS.yellow} buttonHeight={44}
                                buttonWidth={"100%"} routeName="MapScreen"/>
                    </Card.Content>
                </Card>
            </LinearGradient>
            <View style={{paddingTop: 70, flexDirection: "row", justifyContent: "space-evenly"}}>
                <SocialButton buttonText="Google" buttonColor={SOCCOLORS.google_col} buttonWidth="35%" buttonHeight={44}
                              buttonIcon="google" iconColor={COLORS.red} colorText={COLORS.red}/>
                <SocialButton buttonText="Facebook" buttonColor={SOCCOLORS.fb_col} buttonWidth="35%" buttonHeight={44}
                              buttonIcon="facebook" iconColor="blue" colorText="blue"/>
            </View>
            <Text style={styles.reg_text}>Még nincs fiókod? <Text style={{color:COLORS.red}}>Regisztráció</Text></Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    linear: {
        height: (Dimensions.get("screen").height / 100) * 65,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    card: {
        height: "70%",
        width: "80%",
        marginBottom: "-10%",

    },
    input: {
        height: 50,
        width: "100%"
    },
    title: {
        color: "#fff",
        fontSize: 24,
        lineHeight: 36,
        fontWeight: "bold",
        alignSelf: "flex-start",
        paddingLeft: "10%",
        paddingBottom: 30
    },
    reg_text:{
        paddingTop:30,
        fontSize:18,
        alignSelf:"center",
        fontWeight:"bold"
    }
});
export default Login;