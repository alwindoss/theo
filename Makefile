.PHONY: build run

build:
	cd ui && npm i && npm run build
	go build -o bin/theo

run: build
	./bin/theo