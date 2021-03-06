// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: users.proto

package users

import (
	context "context"
	fmt "fmt"
	domain "github.com/EmptyShadow/eltech.journal/api/domain"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
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

// Запрос на регитсрацию пользователя.
type CreateRequest struct {
	Credentials *domain.Credentials `protobuf:"bytes,1,opt,name=Credentials,proto3" json:"Credentials,omitempty"`
	FullName    *domain.FullName    `protobuf:"bytes,2,opt,name=FullName,proto3" json:"FullName,omitempty"`
}

func (m *CreateRequest) Reset()      { *m = CreateRequest{} }
func (*CreateRequest) ProtoMessage() {}
func (*CreateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_030765f334c86cea, []int{0}
}
func (m *CreateRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CreateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CreateRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CreateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateRequest.Merge(m, src)
}
func (m *CreateRequest) XXX_Size() int {
	return m.Size()
}
func (m *CreateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateRequest proto.InternalMessageInfo

func (m *CreateRequest) GetCredentials() *domain.Credentials {
	if m != nil {
		return m.Credentials
	}
	return nil
}

func (m *CreateRequest) GetFullName() *domain.FullName {
	if m != nil {
		return m.FullName
	}
	return nil
}

// Ответ от API с успешно созданным пользователем.
type CreateResponse struct {
	User *domain.User `protobuf:"bytes,1,opt,name=User,proto3" json:"User,omitempty"`
}

func (m *CreateResponse) Reset()      { *m = CreateResponse{} }
func (*CreateResponse) ProtoMessage() {}
func (*CreateResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_030765f334c86cea, []int{1}
}
func (m *CreateResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CreateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CreateResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CreateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateResponse.Merge(m, src)
}
func (m *CreateResponse) XXX_Size() int {
	return m.Size()
}
func (m *CreateResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateResponse.DiscardUnknown(m)
}

var xxx_messageInfo_CreateResponse proto.InternalMessageInfo

func (m *CreateResponse) GetUser() *domain.User {
	if m != nil {
		return m.User
	}
	return nil
}

func init() {
	proto.RegisterType((*CreateRequest)(nil), "github.com.EmptyShadow.eltech.journal.api.CreateRequest")
	proto.RegisterType((*CreateResponse)(nil), "github.com.EmptyShadow.eltech.journal.api.CreateResponse")
}

func init() { proto.RegisterFile("users.proto", fileDescriptor_030765f334c86cea) }

var fileDescriptor_030765f334c86cea = []byte{
	// 310 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x92, 0x31, 0x4b, 0x03, 0x31,
	0x14, 0xc7, 0x13, 0xd1, 0x22, 0x29, 0x3a, 0x64, 0x2a, 0x1d, 0x1e, 0xd2, 0x49, 0x97, 0x04, 0x5a,
	0x28, 0xba, 0x5a, 0x74, 0x54, 0x38, 0x29, 0x88, 0x5b, 0xda, 0x3e, 0xec, 0xc9, 0xdd, 0xe5, 0x4c,
	0x72, 0x88, 0x93, 0x8e, 0x8e, 0x7e, 0x0c, 0x3f, 0x83, 0x9f, 0xc0, 0xb1, 0x63, 0x47, 0x9b, 0x2e,
	0x8e, 0xfd, 0x08, 0xd2, 0x3b, 0x6b, 0xcf, 0xad, 0xe7, 0x96, 0xe1, 0xfd, 0x7e, 0xef, 0x9f, 0xc7,
	0x9f, 0xd5, 0x33, 0x8b, 0xc6, 0x8a, 0xd4, 0x68, 0xa7, 0xf9, 0xd1, 0x6d, 0xe8, 0xc6, 0xd9, 0x40,
	0x0c, 0x75, 0x2c, 0xce, 0xe2, 0xd4, 0x3d, 0x5e, 0x8d, 0xd5, 0x48, 0x3f, 0x08, 0x8c, 0x1c, 0x0e,
	0xc7, 0xe2, 0x4e, 0x67, 0x26, 0x51, 0x91, 0x50, 0x69, 0xd8, 0xec, 0xae, 0x47, 0x65, 0x69, 0x54,
	0xfe, 0x1d, 0x95, 0x2a, 0x0d, 0xe5, 0x48, 0xc7, 0x2a, 0x4c, 0x8a, 0x15, 0xad, 0x77, 0xca, 0xf6,
	0x7a, 0x06, 0x95, 0xc3, 0x00, 0xef, 0x33, 0xb4, 0x8e, 0x5f, 0xb3, 0x7a, 0xcf, 0xe0, 0x08, 0x13,
	0x17, 0xaa, 0xc8, 0x36, 0xe8, 0x01, 0x3d, 0xac, 0xb7, 0xbb, 0x62, 0xe3, 0x28, 0xa2, 0x44, 0x07,
	0x65, 0x15, 0xbf, 0x64, 0xbb, 0xe7, 0x59, 0x14, 0x5d, 0xa8, 0x18, 0x1b, 0x5b, 0xb9, 0xb6, 0x53,
	0x41, 0xbb, 0x42, 0x83, 0x5f, 0x49, 0xab, 0xcf, 0xf6, 0x57, 0xd9, 0x6d, 0xaa, 0x13, 0x8b, 0xbc,
	0xc7, 0xb6, 0xfb, 0x16, 0xcd, 0x4f, 0x6a, 0x59, 0x41, 0xbf, 0xc4, 0x82, 0x1c, 0x6e, 0xbf, 0x50,
	0xb6, 0xb3, 0x7c, 0x58, 0xfe, 0xc4, 0x6a, 0xc5, 0x02, 0x7e, 0x5c, 0xed, 0x00, 0xeb, 0x7b, 0x36,
	0x4f, 0xfe, 0x41, 0x16, 0xbf, 0x69, 0x91, 0x53, 0x9c, 0xcc, 0x80, 0x4c, 0x67, 0x40, 0x16, 0x33,
	0xa0, 0xcf, 0x1e, 0xe8, 0x9b, 0x07, 0xfa, 0xe1, 0x81, 0x4e, 0x3c, 0xd0, 0x4f, 0x0f, 0xf4, 0xcb,
	0x03, 0x59, 0x78, 0xa0, 0xaf, 0x73, 0x20, 0x93, 0x39, 0x90, 0xe9, 0x1c, 0xc8, 0x8d, 0xdc, 0xbc,
	0x0c, 0x79, 0xdd, 0x06, 0xb5, 0xbc, 0x0c, 0x9d, 0xef, 0x00, 0x00, 0x00, 0xff, 0xff, 0xd3, 0xe7,
	0x43, 0x54, 0x7e, 0x02, 0x00, 0x00,
}

func (this *CreateRequest) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*CreateRequest)
	if !ok {
		that2, ok := that.(CreateRequest)
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
	if !this.Credentials.Equal(that1.Credentials) {
		return false
	}
	if !this.FullName.Equal(that1.FullName) {
		return false
	}
	return true
}
func (this *CreateResponse) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*CreateResponse)
	if !ok {
		that2, ok := that.(CreateResponse)
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
	if !this.User.Equal(that1.User) {
		return false
	}
	return true
}
func (this *CreateRequest) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 6)
	s = append(s, "&users.CreateRequest{")
	if this.Credentials != nil {
		s = append(s, "Credentials: "+fmt.Sprintf("%#v", this.Credentials)+",\n")
	}
	if this.FullName != nil {
		s = append(s, "FullName: "+fmt.Sprintf("%#v", this.FullName)+",\n")
	}
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *CreateResponse) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 5)
	s = append(s, "&users.CreateResponse{")
	if this.User != nil {
		s = append(s, "User: "+fmt.Sprintf("%#v", this.User)+",\n")
	}
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringUsers(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// UsersClient is the client API for Users service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type UsersClient interface {
	// Регистрация пользователя в системе.
	Create(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*CreateResponse, error)
}

type usersClient struct {
	cc *grpc.ClientConn
}

func NewUsersClient(cc *grpc.ClientConn) UsersClient {
	return &usersClient{cc}
}

func (c *usersClient) Create(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*CreateResponse, error) {
	out := new(CreateResponse)
	err := c.cc.Invoke(ctx, "/github.com.EmptyShadow.eltech.journal.api.Users/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UsersServer is the server API for Users service.
type UsersServer interface {
	// Регистрация пользователя в системе.
	Create(context.Context, *CreateRequest) (*CreateResponse, error)
}

// UnimplementedUsersServer can be embedded to have forward compatible implementations.
type UnimplementedUsersServer struct {
}

func (*UnimplementedUsersServer) Create(ctx context.Context, req *CreateRequest) (*CreateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}

func RegisterUsersServer(s *grpc.Server, srv UsersServer) {
	s.RegisterService(&_Users_serviceDesc, srv)
}

func _Users_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UsersServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.EmptyShadow.eltech.journal.api.Users/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UsersServer).Create(ctx, req.(*CreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Users_serviceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.EmptyShadow.eltech.journal.api.Users",
	HandlerType: (*UsersServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _Users_Create_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "users.proto",
}

func (m *CreateRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CreateRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CreateRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.FullName != nil {
		{
			size, err := m.FullName.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintUsers(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if m.Credentials != nil {
		{
			size, err := m.Credentials.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintUsers(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *CreateResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CreateResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CreateResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.User != nil {
		{
			size, err := m.User.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintUsers(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintUsers(dAtA []byte, offset int, v uint64) int {
	offset -= sovUsers(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *CreateRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Credentials != nil {
		l = m.Credentials.Size()
		n += 1 + l + sovUsers(uint64(l))
	}
	if m.FullName != nil {
		l = m.FullName.Size()
		n += 1 + l + sovUsers(uint64(l))
	}
	return n
}

func (m *CreateResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.User != nil {
		l = m.User.Size()
		n += 1 + l + sovUsers(uint64(l))
	}
	return n
}

func sovUsers(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozUsers(x uint64) (n int) {
	return sovUsers(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *CreateRequest) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&CreateRequest{`,
		`Credentials:` + strings.Replace(fmt.Sprintf("%v", this.Credentials), "Credentials", "domain.Credentials", 1) + `,`,
		`FullName:` + strings.Replace(fmt.Sprintf("%v", this.FullName), "FullName", "domain.FullName", 1) + `,`,
		`}`,
	}, "")
	return s
}
func (this *CreateResponse) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&CreateResponse{`,
		`User:` + strings.Replace(fmt.Sprintf("%v", this.User), "User", "domain.User", 1) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringUsers(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *CreateRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowUsers
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
			return fmt.Errorf("proto: CreateRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CreateRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Credentials", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowUsers
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthUsers
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthUsers
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Credentials == nil {
				m.Credentials = &domain.Credentials{}
			}
			if err := m.Credentials.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field FullName", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowUsers
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthUsers
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthUsers
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.FullName == nil {
				m.FullName = &domain.FullName{}
			}
			if err := m.FullName.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipUsers(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthUsers
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthUsers
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
func (m *CreateResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowUsers
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
			return fmt.Errorf("proto: CreateResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CreateResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field User", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowUsers
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthUsers
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthUsers
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.User == nil {
				m.User = &domain.User{}
			}
			if err := m.User.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipUsers(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthUsers
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthUsers
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
func skipUsers(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowUsers
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
					return 0, ErrIntOverflowUsers
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
					return 0, ErrIntOverflowUsers
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
				return 0, ErrInvalidLengthUsers
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupUsers
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthUsers
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthUsers        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowUsers          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupUsers = fmt.Errorf("proto: unexpected end of group")
)
