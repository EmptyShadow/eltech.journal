#!/bin/sh

project_volume_path=$(pwd)/../
container_workdir="/out"
projects_namespace="${container_workdir}/github.com/EmptyShadow"
project_path_in_container="${projects_namespace}"/eltech.journal
web_path_in_container="${project_path_in_container}"/web/journal-ui/src/api
uid="$(id -u)"
gid="$(id -g)"

mkdir -p ../docs/api
mkdir -p ../web/journal-ui/src/api

echo "Generate api"

for file in *.proto; do
  filename="${file%.*}"

  if [ "${filename}" = "domain" ]
  then
    # генерация доменных типов
    docker run --rm \
      -v "${project_volume_path}":"${project_path_in_container}" \
      -w "${container_workdir}" \
      -u "${uid}":"${gid}" \
      emptyshadow/protoc:v1.33.0 -I=. -I=${project_path_in_container}/api \
      --gogoslick_out=\
Mgoogle/protobuf/any.proto=github.com/gogo/protobuf/types,\
Mgoogle/protobuf/duration.proto=github.com/gogo/protobuf/types,\
Mgoogle/protobuf/struct.proto=github.com/gogo/protobuf/types,\
Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types,\
Mgoogle/protobuf/wrappers.proto=github.com/gogo/protobuf/types:. \
      --js_out=import_style=commonjs:${web_path_in_container} \
      "${project_path_in_container}"/api/"${file}"
  else
    # генерация типов сообщений и grpc
    docker run --rm \
      -v "${project_volume_path}":"${project_path_in_container}" \
      -w "${container_workdir}" \
      -u "${uid}":"${gid}" \
      emptyshadow/protoc:v1.33.0 -I=. -I=${project_path_in_container}/api \
      --gogoslick_out=plugins=grpc,\
Mgoogle/protobuf/any.proto=github.com/gogo/protobuf/types,\
Mgoogle/protobuf/duration.proto=github.com/gogo/protobuf/types,\
Mgoogle/protobuf/struct.proto=github.com/gogo/protobuf/types,\
Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types,\
Mgoogle/protobuf/wrappers.proto=github.com/gogo/protobuf/types:. \
      --js_out=import_style=commonjs:${web_path_in_container} \
      --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${web_path_in_container} \
      "${project_path_in_container}"/api/"${file}"
  fi

  # генерация документации по grpc или protobuf
  docker run --rm \
    -v "${project_volume_path}":"${project_path_in_container}" \
    -w "${container_workdir}" \
    -u "${uid}":"${gid}" \
    emptyshadow/protoc:v1.33.0 -I=. -I=${project_path_in_container}/api \
    --doc_out="${project_path_in_container}"/docs/api --doc_opt=markdown,"${filename}".md \
    "${project_path_in_container}"/api/"${file}"
done

echo "End generate api"