"use client"

import { useState, useCallback } from "react"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "300px",
}

const center = {
  lat: -2.532018,
  lng: -44.299867,
}

export default function MapaGoogle({ onSelect }: { onSelect: (pos: [number, number]) => void }) {
  const [markerPosition, setMarkerPosition] = useState<google.maps.LatLngLiteral | null>(null)

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // coloque sua chave no .env
  })

  const onMapClick = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (e.latLng) {
        const position = { lat: e.latLng.lat(), lng: e.latLng.lng() }
        setMarkerPosition(position)
        onSelect([position.lat, position.lng])
      }
    },
    [onSelect]
  )

  if (!isLoaded) return <div>Carregando mapa...</div>

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} onClick={onMapClick}>
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  )
}