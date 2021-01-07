package config

import (
	"fmt"
	"os"
	"strconv"
	"time"
)

type Value struct {
	key    string
	v      string
	exists bool
}

func Get(key string) *Value {
	v := &Value{key: key}
	v.v, v.exists = os.LookupEnv(v.key)

	return v
}

func (v *Value) panicIfEmpty() {
	if v.v == "" {
		panic(fmt.Sprintf("%s value is empty", v.key))
	}
}

func (v *Value) panicIfNotExists() {
	if !v.exists {
		panic(fmt.Sprintf("%s does not exist in system", v.key))
	}
}

func (v *Value) String(def string) string {
	if v.v == "" {
		return def
	}

	return v.v
}

func (v *Value) MustBytes() []byte {
	v.panicIfNotExists()

	return []byte(v.v)
}

func (v *Value) Bytes(def []byte) []byte {
	if v.v == "" {
		return def
	}

	return []byte(v.v)
}

func (v *Value) MustString() string {
	v.panicIfNotExists()

	return v.v
}

func (v *Value) Int(def int) int {
	val, err := strconv.Atoi(v.v)
	if err != nil {
		return def
	}

	return val
}

func (v *Value) MustInt() int {
	v.panicIfNotExists()
	v.panicIfEmpty()

	val, err := strconv.Atoi(v.v)
	if err != nil {
		panic(fmt.Sprintf("%s value is %s, but it is not int: %s", v.key, v.v, err))
	}

	return val
}

func (v *Value) Bool(def bool) bool {
	val, err := strconv.ParseBool(v.v)
	if err != nil {
		return def
	}

	return val
}

func (v *Value) MustBool() bool {
	v.panicIfNotExists()
	v.panicIfEmpty()

	val, err := strconv.ParseBool(v.v)
	if err != nil {
		panic(fmt.Sprintf("%s value is %s, but it is not bool: %s", v.key, v.v, err))
	}

	return val
}

func (v *Value) Duration(def time.Duration) time.Duration {
	val, err := time.ParseDuration(v.v)
	if err != nil {
		return def
	}

	return val
}

func (v *Value) MustDuration() time.Duration {
	v.panicIfNotExists()
	v.panicIfEmpty()

	val, err := time.ParseDuration(v.v)
	if err != nil {
		panic(fmt.Sprintf("%s value is %s, but it is not duration: %s", v.key, v.v, err))
	}

	return val
}

func (v *Value) Float(def float64) float64 {
	val, err := strconv.ParseFloat(v.v, 64)
	if err != nil {
		return def
	}

	return val
}

func (v *Value) MustFloat() float64 {
	v.panicIfNotExists()
	v.panicIfEmpty()

	val, err := strconv.ParseFloat(v.v, 64)
	if err != nil {
		panic(fmt.Sprintf("%s value is %s, but it is not float: %s", v.key, v.v, err))
	}

	return val
}
