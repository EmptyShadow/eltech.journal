#!/bin/sh
for f in *.proto; do
  fn="${f%.*}"
  mkdir go js doc
  docker run --rm -v $(pwd):$(pwd) -w $(pwd) emptyshadow/protoc:v1.33.0 \
    -I=. -I=/usr/include -I=/usr/include/github.com/gogo/protobuf/protobuf \
    --gogoslick_out=plugins=grpc:go \
    --js_out=import_style=commonjs:js \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
    --doc_out=doc --doc_opt=markdown,api."${fn}".md \
    *.proto
  cp -ra doc/. ../docs/api/
  cp -ra go/. ../internal/transport/"${fn}"
  cp -ra js/. ../web/journal-ui/src/api/"${fn}"
  rm -rf go js doc
done