import React from 'react';
import { Text, Image, View, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album;

    const {
        textContainer,
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
                </View>
                <View style={textContainer}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image source={{ uri: image }} style={imageStyle} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    <Text>Buy Now!</Text>
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: '600'
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 10
    },
    imageStyle: {
        height: 400,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
