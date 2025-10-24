package main

import (
	"io/fs"
	"log"
	"net"
	"net/http"

	"github.com/alwindoss/theo/ui"
)

func main() {
	addr := net.JoinHostPort("", "6060")
	reactApp, err := fs.Sub(ui.UIFS, "dist")
	if err != nil {
		panic(err)
	}
	http.Handle("GET /", http.FileServerFS(reactApp))
	log.Fatal(http.ListenAndServe(addr, nil))
}
