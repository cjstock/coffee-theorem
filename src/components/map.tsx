import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useEffect, useRef, useState } from "react";
import { createCustomEqual } from "fast-equals";
import { isLatLngLiteral } from "@googlemaps/typescript-guards"
import { string } from "zod";


interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onIdle?: (map: google.maps.Map) => void;
    children?: React.ReactNode
}

const Map: React.FC<MapProps> = ({
    onIdle,
    children,
    style,
    ...options
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new google.maps.Map(ref.current, {
                ...options,
                mapId: "75d02be6dd1246a1",
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false
            }));
        }
    }, [ref, map])

    return (<>
        <div ref={ref} style={style} />
        {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                // set the map prop on the child component
                return React.cloneElement(child, { map });
            }
        })}
    </>)
};

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
    const [marker, setMarker] = React.useState<google.maps.Marker>();

    React.useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    React.useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);

    return null;
};

interface PlacesProps {
    searchQuery: string,
    map?: google.maps.Map,
    onLocationChange: (loc: google.maps.LatLngLiteral) => void
}

const Places: React.FC<PlacesProps> = ({
    searchQuery,
    map,
    onLocationChange
}: { searchQuery: string, map?: google.maps.Map, onLocationChange: (loc: google.maps.LatLngLiteral) => void }) => {
    const [placesService, setPlacesService] = useState<google.maps.places.PlacesService>();
    const [location, setLocation] = useState<google.maps.LatLng>();

    function getFirstResult() {
        const request = {
            query: searchQuery,
            fields: ['name', 'geometry']
        }

        placesService?.findPlaceFromQuery(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                const resLoc = {lat: results?.at(0)?.geometry?.location?.lat()!, lng: results?.at(0)?.geometry?.location?.lng()! }
                console.log(resLoc)
                setLocation(results?.at(0)?.geometry?.location)
                onLocationChange(resLoc)
                map?.panTo(resLoc)
            }
        })
    }

    useEffect(() => {
        console.log(`Query: ${searchQuery}`)
        if (!placesService && map) {
            setPlacesService(new google.maps.places.PlacesService(map))
        }
        getFirstResult()
    }, [placesService, map])

    useEffect(() => {
        if (map && location) {
            map.panTo(location)
        }
    }, [location])


    return <Marker position={location} map={map} />
}


export { Map, Marker, Places }