import loadData from './sdk/loadData'
import React, {Component} from 'react';
import {

    StyleSheet,
    Text,
    View, FlatList, ScrollView, Image
} from 'react-native';
import CurrencyFormatter from 'react-native-currency-formatter'
import {
    Container,
    Content,
    Card,
    CardItem,
    Header,
    Left,
    Body,
    Right,
    Tab,
    Tabs,
    Button,
    Icon,
    Title,
    Thumbnail,
    Spinner
} from 'native-base';

type Props = {};

export default class App extends Component<Props> {
    state = {
        data: '',
        preload: true,
    };

    componentDidMount() {
        loadData().then(data => {
            this.setState({data, preload: false})
        }, console.error);
    }

    timestamper = (timer) => {

    }

    render() {
        let {data, preload} = this.state;

        let tab = [
            {
                title: 'همه',
                condition: [1, 0]
            },
            {
                title: 'فعال',
                condition: [1]
            },
            {
                title: 'غیر فعال',
                condition: [0]
            }
        ];

        return (
            <Container>
                <Header style={{backgroundColor: '#fff',paddingTop:5}}>
                    <View style={{flex: 1,}}>
                        <Icon name='settings' style={{color: '#000'}}/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>

                        <View style={{width: '60%'}}>

                            <Text style={{paddingTop: 10,}}>
                                پوریا 
                            </Text>
                        </View>
                        <View style={{width: '40%', paddingLeft: 5 ,paddingRight: 5 ,  }}>
                            <Image style={{width: 35, height: 35, borderRadius: 50}} source={require('./sdk/2.jpg')}/>
                        </View>
                    </View>
                    <View style={{flex: 1,}}>
                        <Icon name='menu' style={{color: '#000', textAlign: 'right'}}/>
                    </View>

                </Header>
                <Tabs tabBarUnderlineStyle={{backgroundColor: '#4262f4'}}>
                    {
                        tab && tab.map(function (tabs, key) {
                            return <Tab key={key} heading={tabs.title} tabStyle={styles.tabStyling}
                                        activeTabStyle={styles.activeTabStyle} textStyle={styles.tabTextStyle}
                                        activeTextStyle={styles.activeTabTextStyle}>
                                <Content paddr style={{backgroundColor: '#eee', paddingLeft: 5, paddingRight: 5}}>
                                    <FlatList
                                        data={data.items}
                                        renderItem={({item}) => {
                                            if (tabs.condition.includes(item.status.advertised))
                                                return <Card>

                                                    <CardItem>
                                                        <View style={{
                                                            flex: 1,

                                                        }}>
                                                            <Image style={{
                                                                height: 140,
                                                                width: null,
                                                                flex: 1,
                                                                borderRadius: 4
                                                            }}
                                                                   source={{uri: 'https://media.wired.com/photos/5b86fce8900cb57bbfd1e7ee/master/pass/Jaguar_I-PACE_S_Indus-Silver_065.jpg'}}/>

                                                            {
                                                                item.status.advertised === 0
                                                                &&
                                                                <Text style={{
                                                                    position: 'absolute',
                                                                    bottom: 0,
                                                                    backgroundColor: '#eee41b',
                                                                    textAlign: 'center',
                                                                    width: '100%',
                                                                    padding: 5,
                                                                    zIndex: 9999
                                                                }}>
                                                                    درانتظار تایید
                                                                </Text>
                                                            }
                                                        </View>
                                                        <View style={{
                                                            flex: 1,
                                                        }}>
                                                            <Text style={{
                                                                flex: 1,
                                                                justifyContent: 'flex-start',
                                                                color: '#000'
                                                            }}>
                                                                {item.title}
                                                            </Text>

                                                            <Text style={{
                                                                flex: 1,
                                                                color: '#000'
                                                            }}>
                                                                {
                                                                    item.status.advertised === 1
                                                                    &&
                                                                    <Text>

                                                                        ویترین تا 48 ساعت
                                                                    </Text>
                                                                }
                                                            </Text>


                                                            <Text style={{
                                                                flex: 1,
                                                                justifyContent: 'flex-end'
                                                            }}>
                                                                {CurrencyFormatter(item.price.value)} <Text style={{
                                                                fontSize: 10,
                                                                color: '#666'
                                                            }}>{item.price.unit}</Text>
                                                            </Text>
                                                        </View>
                                                    </CardItem>
                                                    {

                                                        item.status.advertised === 1
                                                        &&
                                                        <CardItem>
                                                            <View>
                                                                <Button transparent>
                                                                    <Text> حذف</Text>
                                                                    <Icon active name="ios-trash"/>
                                                                </Button>
                                                            </View>
                                                            <View>
                                                                <Button transparent>
                                                                    <Text>ویرایش </Text>
                                                                    <Icon active name="md-create"/>
                                                                </Button>
                                                            </View>
                                                            <View>
                                                                <Button transparent>
                                                                    <Text> افزایش بازدید </Text>
                                                                    <Icon active name="ios-pulse"/>
                                                                </Button>
                                                            </View>
                                                        </CardItem>
                                                    }

                                                </Card>
                                        }}
                                        keyExtractor={items => String(items.id + items.price.value)}/>
                                </Content>
                            </Tab>
                        })
                    }
                </Tabs>
            </Container>
        );
    }


}

const styles = StyleSheet.create({
    tabStyling: {
        backgroundColor: '#fff'
    },
    activeTabStyle: {
        backgroundColor: '#fff',
    },
    tabTextStyle: {
        color: '#666'
    },
    activeTabTextStyle: {
        color: '#000',

    }
});
