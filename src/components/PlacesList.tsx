import { examplePlaces } from "../data/examplePlaces";
import { Place } from "../place";
import { PlaceView } from "./PlaceView";

export function PlacesList() {
    return (
        <div className="favePlaces">
            {examplePlaces.map((p: Place) => (
                <PlaceView place={p} key={p.title} />
            ))}
        </div>
    );
}
