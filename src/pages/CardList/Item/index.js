import { useState } from "react";

import addedImage from "D:/webstorm/untitled1/src/assets/added.png";

import { Container, Image, Text } from "./styled";

function Item(props) {
    const [isAdded, setIsAdded] = useState(props.isAdded);

    const toggleCompleteness = () => {
        setIsAdded((prevState) => !prevState);
    };

    return (
        <Container onClick={toggleCompleteness}>
            <Image src={isAdded ? props.imagePath : addedImage} />
            <Text>{props.text}</Text>
        </Container>
    );
}

export default Item;