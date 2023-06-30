import "./App.css";
import { examplePlaces } from "../data/examplePlaces";
import { Place } from "../place";

console.log({ examplePlaces });

function App() {
    return (
        <div className="favePlaces">
            <PlaceView place={examplePlaces[0]} />
            <PlaceView place={examplePlaces[1]} />
            <PlaceView place={examplePlaces[2]} />
        </div>
    );
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
