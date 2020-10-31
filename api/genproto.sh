mkdir go js doc
docker run --rm -v $(pwd):$(pwd) -w $(pwd) thethingsindustries/protoc \
	-I=. -I=/usr/include -I=/usr/include/github.com/gogo/protobuf/protobuf \
	--gogo_out=plugins=grpc:go \
  --js_out=import_style=commonjs:js \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
  --doc_out=doc --doc_opt=markdown,api.proto.md \
  *.proto
cp -ra doc/. ../docs/api/ ; cp -ra go/. ../internal/transport/ ; cp -ra js/. ../web/journal-ui/src/api/
rm -rf go js doc