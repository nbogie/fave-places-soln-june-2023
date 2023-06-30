import "./App.css";
import { examplePlaces } from "../data/examplePlaces";
import { Place } from "../place";

console.log({ examplePlaces });

function App() {
    const examplePlacesElements: JSX.Element[] = [
        <PlaceView place={examplePlaces[0]} key={1} />,
        <PlaceView place={examplePlaces[1]} key={2} />,
        <PlaceView place={examplePlaces[2]} key={3} />,
    ];

    console.log("JSX.Element array: ", examplePlacesElements);

    return <div className="favePlaces">{examplePlacesElements}</div>;
}

export default App;

interface PlaceViewProps {
    place: Place;
}

function PlaceView(props: PlaceViewProps): JSX.Element {
    const { title, placeName, description } = props.place;

    return (
        <div className="place">
            <h2>{title}</h2>
            <h3>{placeName}</h3>
            <p>{description}</p>
        </div>
    );
}
