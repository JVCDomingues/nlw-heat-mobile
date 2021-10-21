import React from "react";
import { View } from "react-native";
import { useAuth } from "../../hooks/auth";
import { COLORS } from "../../theme";

import Button from '../Button';

import { styles } from './styles';

function SigninBox() {
  const { signIn, isSigning } = useAuth();

  return (
    <View style={styles.container}>
      <Button 
        title="Entrar com GitHub" 
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigning}
      />
    </View>
  )
}

export default SigninBox;