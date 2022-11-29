import {useCallback, useState} from "react";

import styles from "./index.module.css";
import Item from "./Item";

import gnoll1 from "D:/webstorm/untitled1/src/assets/1.png";
import gnoll2 from "D:/webstorm/untitled1/src/assets/2.png";
import gnoll3 from "D:/webstorm/untitled1/src/assets/3.png";
import gnoll4 from "D:/webstorm/untitled1/src/assets/4.png";
import gnoll5 from "D:/webstorm/untitled1/src/assets/5.png";
import cheat1 from "D:/webstorm/untitled1/src/assets/IMG_0331.jpg";
import cheat2 from "D:/webstorm/untitled1/src/assets/IMG_0379.jpg";

const CardDeck = () => {
    const [cards, setCard] = useState([
        // {id: crypto.randomUUID(), isAdded: true, text: "GNOLL WITH AN AXE", imagePath: gnoll1},
        // {id: crypto.randomUUID(), isAdded: true, text: "GNOLL WITH A SPEAR", imagePath: gnoll2},
        // {id: crypto.randomUUID(), isAdded: true, text: "TWO GNOLLS", imagePath: gnoll3},
        // {id: crypto.randomUUID(), isAdded: true, text: "THE GNOLL KILLER", imagePath: gnoll4},
        // {id: crypto.randomUUID(), isAdded: true, text: "GNOLL BOUNCER", imagePath: gnoll5},
        {id: crypto.randomUUID(), isAdded: true, text: "SUETOLOG", imagePath: cheat1},
        {id: crypto.randomUUID(), isAdded: true, text: "DVA SUELOTOGA", imagePath: cheat2},
    ]);
    const [newCard, setNewCard] = useState("");
    const [newCardImage, setNewCardImage] = useState("");

    const handleNewCardInput = useCallback((event) => {
        setNewCard(event.target.value)
    }, [setNewCard]);

    const handleNewCardImage = useCallback((event) => {
        setNewCardImage(event.target.value)
    }, [setNewCardImage]);

    const handleAddCard = useCallback(() => {
        setCard((prevState) => [
            ...prevState,
            {id: crypto.randomUUID(), isAdded: true, text: newCard, imagePath: newCardImage},
        ]);
        setNewCard("");
        setNewCardImage("");
    }, [newCard, newCardImage, setNewCard, setNewCardImage]);

    return (
        <>
            <h1>Card list</h1>
            <div className={styles["input-container"]}>

                <input className={styles.input} type="file" name="image" onChange={handleNewCardImage}
                       value={newCardImage}/>

                <input className={styles.input} onChange={handleNewCardInput} value={newCard}/>
                <button className={styles.button} onClick={handleAddCard}>
                    Add
                </button>
            </div>
            <div className={styles.container}>
                {cards.map((card) => (
                    <Item key={card.id} id={card.id} isAdded={card.isAdded} text={card.text}
                          imagePath={card.imagePath}/>
                ))}
            </div>
        </>
    );
};
export default CardDeck;

// class Todo extends Component {
//     state = {};
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             test: "Some test state",
//         };
//
//         console.log("constructor (Mounting)");
//     }
//
//     static getDerivedStateFromProps(props, state) {
//         console.log("getDerivedStateFromProps (Mounting + Updating)");
//
//         return {
//             ...state,
//             derived: `Some state based on props: ${props}`,
//         };
//     }
//
//     componentDidMount() {
//         console.log("componentDidMount (Mounting)");
//
//         this.setState({ mounted: true });
//     }
//
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log("shouldComponentUpdate (Updating)");
//
//         return true;
//     }
//
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log("getSnapshotBeforeUpdate (Updating)");
//
//         return null;
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log("componentDidUpdate (Updating)");
//     }
//
//     static getDerivedStateFromError(error) {
//         console.log("getDerivedStateFromError (Error Handling)");
//     }
//
//     componentDidCatch(error, info) {
//         console.log("componentDidCatch (Error Handling)");
//     }
//
//     componentWillUnmount() {
//         console.log("componentWillUnmount (Unmounting)");
//     }
//
//     render() {
//         console.log("render (Mounting + Updating)");
//
//         return (
//             <>
//                 <h1>Cards for your deck</h1>
//                 <div className={styles.container}>
//                     <Item completed text="GNOLL WITH AN AXE" imagePath = {gnoll1} />
//                     <Item completed text="GNOLL WITH A SPEAR" imagePath = {gnoll2} />
//                     <Item completed text="TWO GNOLLS" imagePath = {gnoll3} />
//                     <Item completed text="THE GNOLL KILLER" imagePath = {gnoll4} />
//                     <Item completed text="GNOLL BOUNCER" imagePath = {gnoll5} />
//                     <Item completed text="SUETOLOG" imagePath = {cheat1} />
//                     <Item completed text="DVA SUETOLOGA" imagePath = {cheat2} />
//                 </div>
//             </>
//         );
//     }
// }
//
// export default Todo;