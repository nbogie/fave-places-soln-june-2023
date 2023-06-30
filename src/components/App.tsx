import "./App.css";
import { examplePlaces } from "../data/examplePlaces";

console.log({ examplePlaces });

function App() {
    return (
        <div className="favePlaces">
            <PlaceView
                title={examplePlaces[0].title}
                placeName={examplePlaces[0].placeName}
                country={examplePlaces[0].country}
                description={examplePlaces[0].description}
                imageURL={examplePlaces[0].imageURL}
                mapURL={examplePlaces[0].mapURL}
            />
        </div>
    );
}

export default App;

interface PlaceViewProps {
    title: string;
    placeName: string;
    country: string;
    description: string;
    imageURL: string;
    mapURL: string;
}

function PlaceView(props: PlaceViewProps) {
    return (
        <div className="place">
            <h2>{props.title}</h2>
            <h3>{props.placeName}</h3>
            <p>{props.description}</p>
        </div>
    );
}
