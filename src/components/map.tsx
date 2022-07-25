import React, { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MarkOptions } from "perf_hooks";

interface MapProps extends google.maps.MapOptions {
    center: google.maps.LatLngLiteral,
    zoom: number,
    children?: ReactNode
}

const MapComponent: React.FC<MapProps> = ({
    center,
    zoom,
    children,
    ...options
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new google.maps.Map(ref.current, {
                center,
                zoom,
                mapId: "75d02be6dd1246a1",
                mapTypeControl: false,
                fullscreenControl: false,
                streetViewControl: false,
                ...options
            }))
        }
    }, [ref, map])

    return (<>
        <div ref={ref} id="map" style={{ height: "500px" }} />
        {
            React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { map });
                }
            })
        }
    </>)
}


const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
    const [marker, setMarker] = useState<google.maps.Marker>();

    useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }

        return () => {
            if (marker) {
                marker.setMap(null);
            }
        }
    }, [marker])

    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options])

    return null;

}

const Map: React.FC<MapProps> = ({
    center,
    zoom,
    ...options
}) => {

    const render = (status: Status) => {
        if (status === (Status.LOADING || Status.FAILURE)) return <h3>{status}</h3>
        return (
        <MapComponent center={center} zoom={zoom} >
            <Marker position={center} title={"Hello!"} animation={google.maps.Animation.DROP} />
        </MapComponent>)
    }
    return (
        <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!} render={render} />
    )
}

export default Map