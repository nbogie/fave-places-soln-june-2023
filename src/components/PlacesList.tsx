import { examplePlaces } from "../data/examplePlaces";
import { PlaceView } from "./PlaceView";

export function PlacesList() {
    const examplePlacesElements: JSX.Element[] = [];
    for (const examplePlace of examplePlaces) {
        examplePlacesElements.push(
            <PlaceView place={examplePlace} key={examplePlace.title} />
        );
    }

    return <div className="favePlaces">{examplePlacesElements}</div>;
}
