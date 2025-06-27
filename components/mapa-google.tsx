"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"
import { google } from "google-maps"

interface MapaGoogleProps {
  onLocationSelect?: (location: { lat: number; lng: number; address: string }) => void
  initialLocation?: { lat: number; lng: number }
  height?: string
}

export function MapaGoogle({
  onLocationSelect,
  initialLocation = { lat: -23.5505, lng: -46.6333 }, // São Paulo como padrão
  height = "400px",
}: MapaGoogleProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [marker, setMarker] = useState<google.maps.Marker | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Verificar se a API key está configurada
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  useEffect(() => {
    if (!apiKey) {
      setError("API Key do Google Maps não configurada")
      setIsLoading(false)
      return
    }

    const initializeMap = async () => {
      try {
        // Carregar a API do Google Maps
        if (!window.google) {
          const script = document.createElement("script")
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
          script.async = true
          script.defer = true

          script.onload = () => {
            createMap()
          }

          script.onerror = () => {
            setError("Erro ao carregar Google Maps API")
            setIsLoading(false)
          }

          document.head.appendChild(script)
        } else {
          createMap()
        }
      } catch (err) {
        setError("Erro ao inicializar o mapa")
        setIsLoading(false)
      }
    }

    const createMap = () => {
      if (!mapRef.current) return

      try {
        const mapInstance = new google.maps.Map(mapRef.current, {
          center: initialLocation,
          zoom: 13,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        })

        const markerInstance = new google.maps.Marker({
          position: initialLocation,
          map: mapInstance,
          draggable: true,
          title: "Selecione a localização",
        })

        // Listener para quando o marker é arrastado
        markerInstance.addListener("dragend", () => {
          const position = markerInstance.getPosition()
          if (position && onLocationSelect) {
            const lat = position.lat()
            const lng = position.lng()

            // Geocoding reverso para obter o endereço
            const geocoder = new google.maps.Geocoder()
            geocoder.geocode({ location: { lat, lng } }, (results, status) => {
              if (status === "OK" && results?.[0]) {
                onLocationSelect({
                  lat,
                  lng,
                  address: results[0].formatted_address,
                })
              } else {
                onLocationSelect({
                  lat,
                  lng,
                  address: `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
                })
              }
            })
          }
        })

        // Listener para cliques no mapa
        mapInstance.addListener("click", (event: google.maps.MapMouseEvent) => {
          if (event.latLng) {
            const lat = event.latLng.lat()
            const lng = event.latLng.lng()

            markerInstance.setPosition({ lat, lng })

            if (onLocationSelect) {
              const geocoder = new google.maps.Geocoder()
              geocoder.geocode({ location: { lat, lng } }, (results, status) => {
                if (status === "OK" && results?.[0]) {
                  onLocationSelect({
                    lat,
                    lng,
                    address: results[0].formatted_address,
                  })
                } else {
                  onLocationSelect({
                    lat,
                    lng,
                    address: `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
                  })
                }
              })
            }
          }
        })

        setMap(mapInstance)
        setMarker(markerInstance)
        setIsLoading(false)
      } catch (err) {
        setError("Erro ao criar o mapa")
        setIsLoading(false)
      }
    }

    initializeMap()
  }, [apiKey, initialLocation, onLocationSelect])

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocalização não é suportada pelo seu navegador")
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude

        if (map && marker) {
          const newPosition = { lat, lng }
          map.setCenter(newPosition)
          marker.setPosition(newPosition)

          if (onLocationSelect) {
            const geocoder = new google.maps.Geocoder()
            geocoder.geocode({ location: newPosition }, (results, status) => {
              if (status === "OK" && results?.[0]) {
                onLocationSelect({
                  lat,
                  lng,
                  address: results[0].formatted_address,
                })
              } else {
                onLocationSelect({
                  lat,
                  lng,
                  address: `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
                })
              }
            })
          }
        }
      },
      (error) => {
        console.error("Erro ao obter localização:", error)
        alert("Erro ao obter sua localização")
      },
    )
  }

  if (!apiKey) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
            <div>
              <h3 className="text-lg font-semibold">Google Maps não configurado</h3>
              <p className="text-sm text-muted-foreground mt-2">Para usar o mapa, configure a variável de ambiente:</p>
              <code className="bg-muted px-2 py-1 rounded text-xs mt-2 block">
                NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua_api_key
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <MapPin className="h-12 w-12 mx-auto text-destructive" />
            <div>
              <h3 className="text-lg font-semibold text-destructive">Erro no Mapa</h3>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Selecionar Localização</h3>
            <Button
              onClick={getCurrentLocation}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-transparent"
            >
              <Navigation className="h-4 w-4" />
              Minha Localização
            </Button>
          </div>

          <div ref={mapRef} style={{ height, width: "100%" }} className="rounded-lg overflow-hidden border" />

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
              <div className="text-center space-y-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-sm text-muted-foreground">Carregando mapa...</p>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            Clique no mapa ou arraste o marcador para selecionar a localização
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Export default para resolver o erro de importação
export default MapaGoogle
