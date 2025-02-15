package main

import (
	"log"
	"net/http"
)

func main(){
    handler := http.NewServeMux()
    server := http.Server{
        Addr: ":42069",
        Handler: handler,
    }

    handler.Handle("GET /", http.FileServer(http.Dir("./")))

    log.Printf("http server started on port %s\n", server.Addr)
    log.Fatal(server.ListenAndServe())
}
