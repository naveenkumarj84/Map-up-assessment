package main

import (
	"encoding/json"
	"net/http"
)

var geofences []Geofence
var vehicles []Vehicle

func createGeofence(w http.ResponseWriter, r *http.Request) {
	var g Geofence
	json.NewDecoder(r.Body).Decode(&g)

	geofences = append(geofences, g)

	json.NewEncoder(w).Encode(g)
}

func createVehicle(w http.ResponseWriter, r *http.Request) {
	var v Vehicle
	json.NewDecoder(r.Body).Decode(&v)

	vehicles = append(vehicles, v)

	json.NewEncoder(w).Encode(v)
}

func updateLocation(w http.ResponseWriter, r *http.Request) {
	var loc Location
	json.NewDecoder(r.Body).Decode(&loc)

	for _, g := range geofences {
		if isInsidePolygon(loc.Latitude, loc.Longitude, g.Coordinates) {
			broadcast("Vehicle entered: " + g.Name)
		}
	}

	json.NewEncoder(w).Encode(map[string]string{
		"status": "updated",
	})
}
