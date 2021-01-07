// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: auth.proto

package auth

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

type TrustRequest struct {
	Credentials *domain.Credentials `protobuf:"bytes,1,opt,name=Credentials,proto3" json:"Credentials,omitempty"`
}

func (m *TrustRequest) Reset()      { *m = TrustRequest{} }
func (*TrustRequest) ProtoMessage() {}
func (*TrustRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_8bbd6f3875b0e874, []int{0}
}
func (m *TrustRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TrustRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TrustRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TrustRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TrustRequest.Merge(m, src)
}
func (m *TrustRequest) XXX_Size() int {
	return m.Size()
}
func (m *TrustRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_TrustRequest.DiscardUnknown(m)
}

var xxx_messageInfo_TrustRequest proto.InternalMessageInfo

func (m *TrustRequest) GetCredentials() *domain.Credentials {
	if m != nil {
		return m.Credentials
	}
	return nil
}

type TrustResponse struct {
	Tokens *domain.Tokens `protobuf:"bytes,1,opt,name=Tokens,proto3" json:"Tokens,omitempty"`
}

func (m *TrustResponse) Reset()      { *m = TrustResponse{} }
func (*TrustResponse) ProtoMessage() {}
func (*TrustResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_8bbd6f3875b0e874, []int{1}
}
func (m *TrustResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TrustResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TrustResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TrustResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TrustResponse.Merge(m, src)
}
func (m *TrustResponse) XXX_Size() int {
	return m.Size()
}
func (m *TrustResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_TrustResponse.DiscardUnknown(m)
}

var xxx_messageInfo_TrustResponse proto.InternalMessageInfo

func (m *TrustResponse) GetTokens() *domain.Tokens {
	if m != nil {
		return m.Tokens
	}
	return nil
}

type RefreshRequest struct {
	RefreshToken string `protobuf:"bytes,1,opt,name=RefreshToken,proto3" json:"RefreshToken,omitempty"`
}

func (m *RefreshRequest) Reset()      { *m = RefreshRequest{} }
func (*RefreshRequest) ProtoMessage() {}
func (*RefreshRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_8bbd6f3875b0e874, []int{2}
}
func (m *RefreshRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RefreshRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RefreshRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RefreshRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RefreshRequest.Merge(m, src)
}
func (m *RefreshRequest) XXX_Size() int {
	return m.Size()
}
func (m *RefreshRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_RefreshRequest.DiscardUnknown(m)
}

var xxx_messageInfo_RefreshRequest proto.InternalMessageInfo

func (m *RefreshRequest) GetRefreshToken() string {
	if m != nil {
		return m.RefreshToken
	}
	return ""
}

type RefreshResponse struct {
	Tokens *domain.Tokens `protobuf:"bytes,1,opt,name=Tokens,proto3" json:"Tokens,omitempty"`
}

func (m *RefreshResponse) Reset()      { *m = RefreshResponse{} }
func (*RefreshResponse) ProtoMessage() {}
func (*RefreshResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_8bbd6f3875b0e874, []int{3}
}
func (m *RefreshResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RefreshResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RefreshResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RefreshResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RefreshResponse.Merge(m, src)
}
func (m *RefreshResponse) XXX_Size() int {
	return m.Size()
}
func (m *RefreshResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_RefreshResponse.DiscardUnknown(m)
}

var xxx_messageInfo_RefreshResponse proto.InternalMessageInfo

func (m *RefreshResponse) GetTokens() *domain.Tokens {
	if m != nil {
		return m.Tokens
	}
	return nil
}

func init() {
	proto.RegisterType((*TrustRequest)(nil), "github.com.EmptyShadow.eltech.journal.api.TrustRequest")
	proto.RegisterType((*TrustResponse)(nil), "github.com.EmptyShadow.eltech.journal.api.TrustResponse")
	proto.RegisterType((*RefreshRequest)(nil), "github.com.EmptyShadow.eltech.journal.api.RefreshRequest")
	proto.RegisterType((*RefreshResponse)(nil), "github.com.EmptyShadow.eltech.journal.api.RefreshResponse")
}

func init() { proto.RegisterFile("auth.proto", fileDescriptor_8bbd6f3875b0e874) }

var fileDescriptor_8bbd6f3875b0e874 = []byte{
	// 338 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x53, 0xbb, 0x4e, 0xf3, 0x30,
	0x14, 0xb6, 0x7f, 0xfd, 0x14, 0xe1, 0x16, 0x90, 0x3c, 0xa1, 0x0e, 0x47, 0x28, 0x13, 0x2c, 0x8e,
	0x28, 0xa8, 0x5c, 0x36, 0x40, 0x0c, 0xac, 0xa1, 0x03, 0xaa, 0x58, 0xdc, 0xc6, 0xe0, 0x40, 0x1b,
	0x87, 0xc4, 0x16, 0x42, 0x62, 0x40, 0x6c, 0x6c, 0x3c, 0x06, 0x8f, 0xc2, 0xd8, 0xb1, 0x23, 0x75,
	0x17, 0xc6, 0x3e, 0x02, 0x22, 0x4d, 0x21, 0xd9, 0x1a, 0xc4, 0x7a, 0xf4, 0x5d, 0xed, 0x73, 0x08,
	0xe1, 0x46, 0x4b, 0x16, 0xc5, 0x4a, 0x2b, 0xba, 0x79, 0x15, 0x68, 0x69, 0x3a, 0xac, 0xab, 0xfa,
	0xec, 0xa4, 0x1f, 0xe9, 0xfb, 0x33, 0xc9, 0x7d, 0x75, 0xc7, 0x44, 0x4f, 0x8b, 0xae, 0x64, 0xd7,
	0xca, 0xc4, 0x21, 0xef, 0x31, 0x1e, 0x05, 0xf5, 0xe6, 0x0f, 0xd4, 0xcd, 0x41, 0xdd, 0x22, 0xd4,
	0xe5, 0x51, 0xe0, 0xfa, 0xaa, 0xcf, 0x83, 0x70, 0x6a, 0xe1, 0x48, 0x52, 0x6b, 0xc5, 0x26, 0xd1,
	0x9e, 0xb8, 0x35, 0x22, 0xd1, 0xf4, 0x9c, 0x54, 0x8f, 0x63, 0xe1, 0x8b, 0x50, 0x07, 0xbc, 0x97,
	0xac, 0xe1, 0x75, 0xbc, 0x51, 0x6d, 0x34, 0xd9, 0xdc, 0x41, 0x58, 0x8e, 0xed, 0xe5, 0xa5, 0x9c,
	0x36, 0x59, 0xce, 0x9c, 0x92, 0x48, 0x85, 0x89, 0xa0, 0xa7, 0xa4, 0xd2, 0x52, 0x37, 0x22, 0x9c,
	0xb9, 0x6c, 0x95, 0x70, 0x99, 0x12, 0xbd, 0x4c, 0xc0, 0xd9, 0x21, 0x2b, 0x9e, 0xb8, 0x8c, 0x45,
	0x22, 0x67, 0x3d, 0x1c, 0x52, 0xcb, 0x26, 0x29, 0x24, 0xb5, 0x58, 0xf2, 0x0a, 0x33, 0xe7, 0x82,
	0xac, 0x7e, 0xb3, 0xfe, 0x3c, 0x53, 0xe3, 0xf9, 0x1f, 0xf9, 0x7f, 0x68, 0xb4, 0xa4, 0x0f, 0x64,
	0x21, 0x2d, 0x4e, 0x77, 0xcb, 0x88, 0xe5, 0x3e, 0xa5, 0xbe, 0x57, 0x9e, 0x38, 0xed, 0xe3, 0x20,
	0xfa, 0x84, 0xc9, 0x62, 0xd6, 0x92, 0xee, 0x97, 0xd0, 0x29, 0xbe, 0x67, 0xfd, 0xe0, 0x37, 0xd4,
	0x59, 0x88, 0x23, 0x7f, 0x30, 0x02, 0x34, 0x1c, 0x01, 0x9a, 0x8c, 0x00, 0x3f, 0x5a, 0xc0, 0xaf,
	0x16, 0xf0, 0x9b, 0x05, 0x3c, 0xb0, 0x80, 0xdf, 0x2d, 0xe0, 0x0f, 0x0b, 0x68, 0x62, 0x01, 0xbf,
	0x8c, 0x01, 0x0d, 0xc6, 0x80, 0x86, 0x63, 0x40, 0x6d, 0x36, 0xff, 0x4e, 0x7f, 0x1d, 0x4d, 0xa7,
	0x92, 0xae, 0xf4, 0xf6, 0x67, 0x00, 0x00, 0x00, 0xff, 0xff, 0xb0, 0x8c, 0xbc, 0xc5, 0x43, 0x03,
	0x00, 0x00,
}

func (this *TrustRequest) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*TrustRequest)
	if !ok {
		that2, ok := that.(TrustRequest)
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
	return true
}
func (this *TrustResponse) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*TrustResponse)
	if !ok {
		that2, ok := that.(TrustResponse)
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
	if !this.Tokens.Equal(that1.Tokens) {
		return false
	}
	return true
}
func (this *RefreshRequest) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*RefreshRequest)
	if !ok {
		that2, ok := that.(RefreshRequest)
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
	if this.RefreshToken != that1.RefreshToken {
		return false
	}
	return true
}
func (this *RefreshResponse) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*RefreshResponse)
	if !ok {
		that2, ok := that.(RefreshResponse)
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
	if !this.Tokens.Equal(that1.Tokens) {
		return false
	}
	return true
}
func (this *TrustRequest) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 5)
	s = append(s, "&auth.TrustRequest{")
	if this.Credentials != nil {
		s = append(s, "Credentials: "+fmt.Sprintf("%#v", this.Credentials)+",\n")
	}
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *TrustResponse) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 5)
	s = append(s, "&auth.TrustResponse{")
	if this.Tokens != nil {
		s = append(s, "Tokens: "+fmt.Sprintf("%#v", this.Tokens)+",\n")
	}
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *RefreshRequest) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 5)
	s = append(s, "&auth.RefreshRequest{")
	s = append(s, "RefreshToken: "+fmt.Sprintf("%#v", this.RefreshToken)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *RefreshResponse) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 5)
	s = append(s, "&auth.RefreshResponse{")
	if this.Tokens != nil {
		s = append(s, "Tokens: "+fmt.Sprintf("%#v", this.Tokens)+",\n")
	}
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringAuth(v interface{}, typ string) string {
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

// AuthClient is the client API for Auth service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type AuthClient interface {
	Trust(ctx context.Context, in *TrustRequest, opts ...grpc.CallOption) (*TrustResponse, error)
	Refresh(ctx context.Context, in *RefreshRequest, opts ...grpc.CallOption) (*RefreshResponse, error)
}

type authClient struct {
	cc *grpc.ClientConn
}

func NewAuthClient(cc *grpc.ClientConn) AuthClient {
	return &authClient{cc}
}

func (c *authClient) Trust(ctx context.Context, in *TrustRequest, opts ...grpc.CallOption) (*TrustResponse, error) {
	out := new(TrustResponse)
	err := c.cc.Invoke(ctx, "/github.com.EmptyShadow.eltech.journal.api.Auth/Trust", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authClient) Refresh(ctx context.Context, in *RefreshRequest, opts ...grpc.CallOption) (*RefreshResponse, error) {
	out := new(RefreshResponse)
	err := c.cc.Invoke(ctx, "/github.com.EmptyShadow.eltech.journal.api.Auth/Refresh", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthServer is the server API for Auth service.
type AuthServer interface {
	Trust(context.Context, *TrustRequest) (*TrustResponse, error)
	Refresh(context.Context, *RefreshRequest) (*RefreshResponse, error)
}

// UnimplementedAuthServer can be embedded to have forward compatible implementations.
type UnimplementedAuthServer struct {
}

func (*UnimplementedAuthServer) Trust(ctx context.Context, req *TrustRequest) (*TrustResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Trust not implemented")
}
func (*UnimplementedAuthServer) Refresh(ctx context.Context, req *RefreshRequest) (*RefreshResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Refresh not implemented")
}

func RegisterAuthServer(s *grpc.Server, srv AuthServer) {
	s.RegisterService(&_Auth_serviceDesc, srv)
}

func _Auth_Trust_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TrustRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServer).Trust(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.EmptyShadow.eltech.journal.api.Auth/Trust",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServer).Trust(ctx, req.(*TrustRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Auth_Refresh_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RefreshRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServer).Refresh(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.EmptyShadow.eltech.journal.api.Auth/Refresh",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServer).Refresh(ctx, req.(*RefreshRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Auth_serviceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.EmptyShadow.eltech.journal.api.Auth",
	HandlerType: (*AuthServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Trust",
			Handler:    _Auth_Trust_Handler,
		},
		{
			MethodName: "Refresh",
			Handler:    _Auth_Refresh_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "auth.proto",
}

func (m *TrustRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TrustRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TrustRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Credentials != nil {
		{
			size, err := m.Credentials.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintAuth(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *TrustResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TrustResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TrustResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Tokens != nil {
		{
			size, err := m.Tokens.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintAuth(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *RefreshRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RefreshRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RefreshRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.RefreshToken) > 0 {
		i -= len(m.RefreshToken)
		copy(dAtA[i:], m.RefreshToken)
		i = encodeVarintAuth(dAtA, i, uint64(len(m.RefreshToken)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *RefreshResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RefreshResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RefreshResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Tokens != nil {
		{
			size, err := m.Tokens.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintAuth(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintAuth(dAtA []byte, offset int, v uint64) int {
	offset -= sovAuth(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *TrustRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Credentials != nil {
		l = m.Credentials.Size()
		n += 1 + l + sovAuth(uint64(l))
	}
	return n
}

func (m *TrustResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Tokens != nil {
		l = m.Tokens.Size()
		n += 1 + l + sovAuth(uint64(l))
	}
	return n
}

func (m *RefreshRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.RefreshToken)
	if l > 0 {
		n += 1 + l + sovAuth(uint64(l))
	}
	return n
}

func (m *RefreshResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Tokens != nil {
		l = m.Tokens.Size()
		n += 1 + l + sovAuth(uint64(l))
	}
	return n
}

func sovAuth(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAuth(x uint64) (n int) {
	return sovAuth(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *TrustRequest) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&TrustRequest{`,
		`Credentials:` + strings.Replace(fmt.Sprintf("%v", this.Credentials), "Credentials", "domain.Credentials", 1) + `,`,
		`}`,
	}, "")
	return s
}
func (this *TrustResponse) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&TrustResponse{`,
		`Tokens:` + strings.Replace(fmt.Sprintf("%v", this.Tokens), "Tokens", "domain.Tokens", 1) + `,`,
		`}`,
	}, "")
	return s
}
func (this *RefreshRequest) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&RefreshRequest{`,
		`RefreshToken:` + fmt.Sprintf("%v", this.RefreshToken) + `,`,
		`}`,
	}, "")
	return s
}
func (this *RefreshResponse) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&RefreshResponse{`,
		`Tokens:` + strings.Replace(fmt.Sprintf("%v", this.Tokens), "Tokens", "domain.Tokens", 1) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringAuth(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *TrustRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuth
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
			return fmt.Errorf("proto: TrustRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TrustRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Credentials", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuth
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
				return ErrInvalidLengthAuth
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAuth
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
		default:
			iNdEx = preIndex
			skippy, err := skipAuth(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthAuth
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthAuth
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
func (m *TrustResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuth
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
			return fmt.Errorf("proto: TrustResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TrustResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Tokens", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuth
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
				return ErrInvalidLengthAuth
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAuth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Tokens == nil {
				m.Tokens = &domain.Tokens{}
			}
			if err := m.Tokens.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAuth(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthAuth
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthAuth
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
func (m *RefreshRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuth
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
			return fmt.Errorf("proto: RefreshRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RefreshRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RefreshToken", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuth
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
				return ErrInvalidLengthAuth
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RefreshToken = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAuth(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthAuth
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthAuth
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
func (m *RefreshResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuth
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
			return fmt.Errorf("proto: RefreshResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RefreshResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Tokens", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuth
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
				return ErrInvalidLengthAuth
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAuth
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Tokens == nil {
				m.Tokens = &domain.Tokens{}
			}
			if err := m.Tokens.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAuth(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthAuth
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthAuth
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
func skipAuth(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAuth
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
					return 0, ErrIntOverflowAuth
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
					return 0, ErrIntOverflowAuth
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
				return 0, ErrInvalidLengthAuth
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAuth
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAuth
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAuth        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAuth          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAuth = fmt.Errorf("proto: unexpected end of group")
)