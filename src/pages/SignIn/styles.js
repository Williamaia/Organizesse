import styled from 'styled-components';


export const Background = styled.View`
    flex:1;
    background-color: #fff;
`;

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
    width: 100px;
    height: 100px;
   
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(0, 0, 0, 0.20)'
})`
    background: rgba(255, 255, 255, 20);
    width: 98%;
    font-size: 17px;
    color: #131313;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 22px;
    color: #131313;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    font-size: 15px;
    margin-top: 15px;
    color: #131313;
`;

export const Text = styled.Text`
    font-size: 15px;
    color: #131313;
`;


export const Title = styled.Text`
    font-size: 25px;
    color: #131313;
    font-weight: bold;
`;

export const AreaText = styled.View`
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
`;



