package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/parse", parseHandler)
	http.ListenAndServe(":8081", nil)
}

func parseHandler(w http.ResponseWriter, r *http.Request) {
	// Simulate parsing log
	fmt.Fprint(w, "{\"parsed\": true}")
}