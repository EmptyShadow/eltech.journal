# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [admins.proto](#admins.proto)
    - [CreateRequest](#github.com.EmptyShadow.eltech.journal.api.CreateRequest)
    - [CreateResponse](#github.com.EmptyShadow.eltech.journal.api.CreateResponse)
    - [DeleteRequest](#github.com.EmptyShadow.eltech.journal.api.DeleteRequest)
    - [DeleteScopeRequest](#github.com.EmptyShadow.eltech.journal.api.DeleteScopeRequest)
    - [ReadAllRequest](#github.com.EmptyShadow.eltech.journal.api.ReadAllRequest)
    - [ReadAllResponse](#github.com.EmptyShadow.eltech.journal.api.ReadAllResponse)
    - [ReadMyProfileResponse](#github.com.EmptyShadow.eltech.journal.api.ReadMyProfileResponse)
    - [ReadRequest](#github.com.EmptyShadow.eltech.journal.api.ReadRequest)
    - [ReadResponse](#github.com.EmptyShadow.eltech.journal.api.ReadResponse)
    - [SwitchStatusToActiveRequest](#github.com.EmptyShadow.eltech.journal.api.SwitchStatusToActiveRequest)
    - [SwitchStatusToBlockedRequest](#github.com.EmptyShadow.eltech.journal.api.SwitchStatusToBlockedRequest)
    - [UpdateRequest](#github.com.EmptyShadow.eltech.journal.api.UpdateRequest)
  
    - [AdminsActions](#github.com.EmptyShadow.eltech.journal.api.AdminsActions)
    - [AdminsProfiles](#github.com.EmptyShadow.eltech.journal.api.AdminsProfiles)
  
- [Scalar Value Types](#scalar-value-types)



<a name="admins.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## admins.proto



<a name="github.com.EmptyShadow.eltech.journal.api.CreateRequest"></a>

### CreateRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ContactInformation | [string](#string) |  |  |






<a name="github.com.EmptyShadow.eltech.journal.api.CreateResponse"></a>

### CreateResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Profile | [Admin](#github.com.EmptyShadow.eltech.journal.api.Admin) |  |  |






<a name="github.com.EmptyShadow.eltech.journal.api.DeleteRequest"></a>

### DeleteRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| UserID | [string](#string) |  |  |






<a name="github.com.EmptyShadow.eltech.journal.api.DeleteScopeRequest"></a>

### DeleteScopeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| UsersIDs | [string](#string) | repeated |  |






<a name="github.com.EmptyShadow.eltech.journal.api.ReadAllRequest"></a>

### ReadAllRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| PageParams | [PageParams](#github.com.EmptyShadow.eltech.journal.api.PageParams) |  |  |






<a name="github.com.EmptyShadow.eltech.journal.api.ReadAllResponse"></a>

### ReadAllResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Profiles | [Admin](#github.com.EmptyShadow.eltech.journal.api.Admin) | repeated |  |






<a name="github.com.EmptyShadow.eltech.journal.api.ReadMyProfileResponse"></a>

### ReadMyProfileResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Profile | [Admin](#github.com.EmptyShadow.eltech.journal.api.Admin) |  |  |






<a name="github.com.EmptyShadow.eltech.journal.api.ReadRequest"></a>

### ReadRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| UserID | [string](#string) |  |  |






<a name="github.com.EmptyShadow.eltech.journal.api.ReadResponse"></a>

### ReadResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Profile | [Admin](#github.com.EmptyShadow.eltech.journal.api.Admin) |  |  |






<a name="github.com.EmptyShadow.eltech.journal.api.SwitchStatusToActiveRequest"></a>

### SwitchStatusToActiveRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| UserID | [string](#string) |  |  |






<a name="github.com.EmptyShadow.eltech.journal.api.SwitchStatusToBlockedRequest"></a>

### SwitchStatusToBlockedRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| UserID | [string](#string) |  |  |
| Reason | [string](#string) |  |  |






<a name="github.com.EmptyShadow.eltech.journal.api.UpdateRequest"></a>

### UpdateRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Profile | [Admin](#github.com.EmptyShadow.eltech.journal.api.Admin) |  |  |





 

 

 


<a name="github.com.EmptyShadow.eltech.journal.api.AdminsActions"></a>

### AdminsActions
Сервис для пользователей с ролью админ.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Read | [ReadRequest](#github.com.EmptyShadow.eltech.journal.api.ReadRequest) | [ReadResponse](#github.com.EmptyShadow.eltech.journal.api.ReadResponse) | Метод для получения данных по любому профилю админа. |
| ReadAll | [ReadAllRequest](#github.com.EmptyShadow.eltech.journal.api.ReadAllRequest) | [ReadAllResponse](#github.com.EmptyShadow.eltech.journal.api.ReadAllResponse) | Метод для получения списка всех профилей. |
| ReadAllOnValidate | [ReadAllRequest](#github.com.EmptyShadow.eltech.journal.api.ReadAllRequest) | [ReadAllResponse](#github.com.EmptyShadow.eltech.journal.api.ReadAllResponse) | Метод для получения новых профилей, которые должны быть провалидированны. Доступен только для админов, у которых активный профиль. |
| SwitchStatusToActive | [SwitchStatusToActiveRequest](#github.com.EmptyShadow.eltech.journal.api.SwitchStatusToActiveRequest) | [.google.protobuf.Empty](#google.protobuf.Empty) | Переключить статус профиля на ACTIVE, в случае если он находится на ON_VALIDATE. |
| SwitchStatusToBlocked | [SwitchStatusToBlockedRequest](#github.com.EmptyShadow.eltech.journal.api.SwitchStatusToBlockedRequest) | [.google.protobuf.Empty](#google.protobuf.Empty) | Переключить статус профиля на BLOCKED, в случае если он находится на ACTIVE или ON_VALIDATE. |
| Delete | [DeleteRequest](#github.com.EmptyShadow.eltech.journal.api.DeleteRequest) | [.google.protobuf.Empty](#google.protobuf.Empty) | Удалить один профиль. |
| DeleteScope | [DeleteScopeRequest](#github.com.EmptyShadow.eltech.journal.api.DeleteScopeRequest) | [.google.protobuf.Empty](#google.protobuf.Empty) | Удалить массив профилей. |


<a name="github.com.EmptyShadow.eltech.journal.api.AdminsProfiles"></a>

### AdminsProfiles
Серси для работы с активными профилями админа или со своим профилем.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [CreateRequest](#github.com.EmptyShadow.eltech.journal.api.CreateRequest) | [CreateResponse](#github.com.EmptyShadow.eltech.journal.api.CreateResponse) | Метод для создания профиля админа. |
| Read | [ReadRequest](#github.com.EmptyShadow.eltech.journal.api.ReadRequest) | [ReadResponse](#github.com.EmptyShadow.eltech.journal.api.ReadResponse) | Метод для получения данных по активному профилю админа. |
| ReadAll | [ReadAllRequest](#github.com.EmptyShadow.eltech.journal.api.ReadAllRequest) | [ReadAllResponse](#github.com.EmptyShadow.eltech.journal.api.ReadAllResponse) | Метод для получения списка активных профилей. |
| ReadMyProfile | [.google.protobuf.Empty](#google.protobuf.Empty) | [ReadResponse](#github.com.EmptyShadow.eltech.journal.api.ReadResponse) | Метод для получения данных профиля по токену доступа из заголовков. |
| Update | [UpdateRequest](#github.com.EmptyShadow.eltech.journal.api.UpdateRequest) | [.google.protobuf.Empty](#google.protobuf.Empty) | Обновить профиль админа, который принадлежит пользователю чей токен доступа передан в заголовке. |
| SwitchActivity | [.google.protobuf.Empty](#google.protobuf.Empty) | [.google.protobuf.Empty](#google.protobuf.Empty) | Переключить статус профиля с ACTIVE на DISABLE и наоборот. |
| DeleteMyProfile | [.google.protobuf.Empty](#google.protobuf.Empty) | [.google.protobuf.Empty](#google.protobuf.Empty) | Удалить профиль. |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

