import { Place } from "../place";

interface PlaceViewProps {
    place: Place;
}

export function PlaceView(props: PlaceViewProps): JSX.Element {
    const { title, placeName, description } = props.place;

    return (
        <div className="place">
            <h2>{title}</h2>
            <h3>{placeName}</h3>
            <p>{description}</p>
        </div>
    );
}
