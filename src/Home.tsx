import { ScrollView, View, Image, Dimensions, Text, TouchableOpacity} from 'react-native';
import {ButtonTransition, Label, Container, CardsContainer, HeaderBackground, Header, Icon, Title, Logo, StatusBar, Card01, Card02, Card03,} from './Home.styles';

const icon = require('./assets/icon-logo.png');
const {width} = Dimensions.get("window");

const cards = [
  { id: 1, backgroundColor: '#ffffff', marginRight: 0 },
  { id: 2, backgroundColor: '#ffffff', marginRight: 0 },
  { id: 4, backgroundColor: '#33CC95', marginRight: 20 },
]

export function Home() {
  console.log(StatusBar.currentHeight);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5429CC" />
      <Container>
        <HeaderBackground>
          <Header>
            <Logo>
              <Icon source={icon} />
              <Title>DT Money</Title>
            </Logo>

            <ButtonTransition>
              <Label>Novo Transação</Label>
            </ButtonTransition>
          </Header>
        </HeaderBackground>
        <View style={{height: 200, top: -100,}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} decelerationRate="fast" snapToInterval={351} style={{flexDirection: 'row',}}>
            {
              cards.map((item) => (
                <View key={item.id} style={{width: 330, height: 200, marginRight: item.marginRight, backgroundColor: item.backgroundColor, marginLeft: 20, borderRadius: 8}}>
                  <View style={{flexDirection: 'row',}}>
                    <Text style={{flex: 1, marginLeft: 23, marginTop: 23, fontSize: 14, fontWeight: 400, lineHeight: 21 }}>
                      Entradas
                    </Text>
                    <TouchableOpacity>
                      <Image style={{margin: 23}} source={require('./assets/entradas.png')}/>
                    </TouchableOpacity>
                  </View>
                  <Text style={{flex: 1, marginLeft: 23, marginTop: 15, fontSize: 30, fontWeight: 400,}}>
                    R$ 17.400,00
                  </Text>
                  <Text style={{flex: 1, marginLeft: 23,fontSize: 12, fontWeight: 400}}>
                    Última entrada dia 13 de abril
                  </Text>
                </View>
              ))
            }
          </ScrollView>
        </View>
      </Container>
    </>
  );
}
