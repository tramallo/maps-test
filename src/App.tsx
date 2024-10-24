import { Marker, Popup } from "react-leaflet";

import "./App.css";
import AddressSearch from "./components/AddressSearch";
import { googleGeocodingService } from "./utils/googleApi";
import { osmMapTilesService } from "./utils/nominatimOSMApi";
import { useDomainData } from "./components/DomainDataContext";
import { useEffect } from "react";
import { testProperties } from "./utils/testData";

export default function App() {
  const { properties, setProperties } = useDomainData();

  useEffect(() => {
    setProperties(testProperties);
  }, [setProperties]);

  return (
    <div id="app">
      <span>controls area</span>
      <AddressSearch
        geocodingService={googleGeocodingService}
        mapTilesService={osmMapTilesService}
      >
        {properties.map((property, index) => (
          <Marker key={index} position={property.coordinates}>
            <Popup>{property.address}</Popup>
          </Marker>
        ))}
      </AddressSearch>
    </div>
  );
}
