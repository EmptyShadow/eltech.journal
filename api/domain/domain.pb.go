// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: domain.proto

package domain

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
	reflect "reflect"
	strings "strings"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Test struct {
	Event string `protobuf:"bytes,1,opt,name=Event,proto3" json:"Event,omitempty"`
}

func (m *Test) Reset()      { *m = Test{} }
func (*Test) ProtoMessage() {}
func (*Test) Descriptor() ([]byte, []int) {
	return fileDescriptor_73e6234e76dbdb84, []int{0}
}
func (m *Test) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Test) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Test.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Test) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Test.Merge(m, src)
}
func (m *Test) XXX_Size() int {
	return m.Size()
}
func (m *Test) XXX_DiscardUnknown() {
	xxx_messageInfo_Test.DiscardUnknown(m)
}

var xxx_messageInfo_Test proto.InternalMessageInfo

func (m *Test) GetEvent() string {
	if m != nil {
		return m.Event
	}
	return ""
}

func init() {
	proto.RegisterType((*Test)(nil), "github.com.EmptyShadow.eltech.journal.api.Test")
}

func init() { proto.RegisterFile("domain.proto", fileDescriptor_73e6234e76dbdb84) }

var fileDescriptor_73e6234e76dbdb84 = []byte{
	// 187 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x49, 0xc9, 0xcf, 0x4d,
	0xcc, 0xcc, 0xd3, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xd2, 0x4c, 0xcf, 0x2c, 0xc9, 0x28, 0x4d,
	0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x73, 0xcd, 0x2d, 0x28, 0xa9, 0x0c, 0xce, 0x48, 0x4c, 0xc9, 0x2f,
	0xd7, 0x4b, 0xcd, 0x29, 0x49, 0x4d, 0xce, 0xd0, 0xcb, 0xca, 0x2f, 0x2d, 0xca, 0x4b, 0xcc, 0xd1,
	0x4b, 0x2c, 0xc8, 0x54, 0x92, 0xe1, 0x62, 0x09, 0x49, 0x2d, 0x2e, 0x11, 0x12, 0xe1, 0x62, 0x75,
	0x2d, 0x4b, 0xcd, 0x2b, 0x91, 0x60, 0x54, 0x60, 0xd4, 0xe0, 0x0c, 0x82, 0x70, 0x9c, 0xd2, 0x2e,
	0x3c, 0x94, 0x63, 0xb8, 0xf1, 0x50, 0x8e, 0xe1, 0xc3, 0x43, 0x39, 0xc6, 0x86, 0x47, 0x72, 0x8c,
	0x2b, 0x1e, 0xc9, 0x31, 0x9e, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91, 0x1c, 0xe3, 0x83, 0x47, 0x72,
	0x8c, 0x2f, 0x1e, 0xc9, 0x31, 0x7c, 0x78, 0x24, 0xc7, 0x38, 0xe1, 0xb1, 0x1c, 0xc3, 0x85, 0xc7,
	0x72, 0x0c, 0x37, 0x1e, 0xcb, 0x31, 0x44, 0x19, 0x20, 0xac, 0xd7, 0x47, 0xb2, 0x5e, 0x1f, 0xd5,
	0x7a, 0xfd, 0xc4, 0x82, 0x4c, 0x7d, 0x88, 0xb3, 0x93, 0xd8, 0xc0, 0xee, 0x36, 0x06, 0x04, 0x00,
	0x00, 0xff, 0xff, 0x60, 0x82, 0x8d, 0x12, 0xc7, 0x00, 0x00, 0x00,
}

func (this *Test) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*Test)
	if !ok {
		that2, ok := that.(Test)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if this.Event != that1.Event {
		return false
	}
	return true
}
func (this *Test) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 5)
	s = append(s, "&domain.Test{")
	s = append(s, "Event: "+fmt.Sprintf("%#v", this.Event)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringDomain(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *Test) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Test) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Test) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Event) > 0 {
		i -= len(m.Event)
		copy(dAtA[i:], m.Event)
		i = encodeVarintDomain(dAtA, i, uint64(len(m.Event)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintDomain(dAtA []byte, offset int, v uint64) int {
	offset -= sovDomain(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Test) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Event)
	if l > 0 {
		n += 1 + l + sovDomain(uint64(l))
	}
	return n
}

func sovDomain(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozDomain(x uint64) (n int) {
	return sovDomain(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *Test) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&Test{`,
		`Event:` + fmt.Sprintf("%v", this.Event) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringDomain(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *Test) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDomain
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Test: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Test: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Event", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDomain
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthDomain
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDomain
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Event = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipDomain(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthDomain
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthDomain
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipDomain(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowDomain
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowDomain
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowDomain
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthDomain
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupDomain
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthDomain
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthDomain        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowDomain          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupDomain = fmt.Errorf("proto: unexpected end of group")
)
