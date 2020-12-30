package sql

import (
	"fmt"
	"reflect"
	"strings"
)

func BuildUpdateSets(sIndex int, indexPrefix string, nameValue ...interface{}) (querySet string,
	queryValues []interface{}) {
	var (
		sets   []string
		values []interface{}
	)

	for i := 0; i < len(nameValue); i += 2 {
		n, _ := nameValue[i].(string)
		v := nameValue[i+1]

		refV := reflect.ValueOf(v)
		if refV.IsZero() || !refV.IsValid() {
			continue
		}

		sets = append(sets, fmt.Sprintf("%s = %s%d", n, indexPrefix, sIndex))
		values = append(values, v)
		sIndex++
	}

	return strings.Join(sets, ", "), values
}
