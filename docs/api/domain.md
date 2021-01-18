# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [domain.proto](#domain.proto)
    - [Admin](#github.com.EmptyShadow.eltech.journal.api.Admin)
    - [Claims](#github.com.EmptyShadow.eltech.journal.api.Claims)
    - [Credentials](#github.com.EmptyShadow.eltech.journal.api.Credentials)
    - [FullName](#github.com.EmptyShadow.eltech.journal.api.FullName)
    - [PageParams](#github.com.EmptyShadow.eltech.journal.api.PageParams)
    - [Session](#github.com.EmptyShadow.eltech.journal.api.Session)
    - [Tokens](#github.com.EmptyShadow.eltech.journal.api.Tokens)
    - [User](#github.com.EmptyShadow.eltech.journal.api.User)
  
    - [ProfileStatus](#github.com.EmptyShadow.eltech.journal.api.ProfileStatus)
    - [Role](#github.com.EmptyShadow.eltech.journal.api.Role)
  
- [Scalar Value Types](#scalar-value-types)



<a name="domain.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## domain.proto



<a name="github.com.EmptyShadow.eltech.journal.api.Admin"></a>

### Admin
Профиль админа.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| User | [User](#github.com.EmptyShadow.eltech.journal.api.User) |  | Пользователь которому принадлежит профиль. |
| ContactInformation | [string](#string) |  | Контактная информация об админе, то есть та информация, которой будет достаточно для возможности связи с ним. |
| Status | [ProfileStatus](#github.com.EmptyShadow.eltech.journal.api.ProfileStatus) |  | Статус профиля. |
| BlockReason | [string](#string) |  | Причина по которой профиль получил статус BLOCKED. |
| CreatedAt | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | Дата время создания профиля. |
| UpdatedAt | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | Дата время обновления профиля. |






<a name="github.com.EmptyShadow.eltech.journal.api.Claims"></a>

### Claims
Утверждения зашитые в jwt токен.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| SessionID | [string](#string) |  |  |
| UserID | [string](#string) |  |  |






<a name="github.com.EmptyShadow.eltech.journal.api.Credentials"></a>

### Credentials
Учетные данные.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Email | [string](#string) |  |  |
| SHA1HashPWD | [bytes](#bytes) |  |  |






<a name="github.com.EmptyShadow.eltech.journal.api.FullName"></a>

### FullName
Полное имя пользователя.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| FirstName | [string](#string) |  | Имя. |
| MiddleName | [string](#string) |  | Отчество, не обязательное поле. |
| LastName | [string](#string) |  | Фамилия. |






<a name="github.com.EmptyShadow.eltech.journal.api.PageParams"></a>

### PageParams
Параметры для страницы извлекаемых данных.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Limit | [uint32](#uint32) |  | Количество извлекаемых записей. |
| Offset | [uint32](#uint32) |  | Смещение относительно начала списка всех данных. |






<a name="github.com.EmptyShadow.eltech.journal.api.Session"></a>

### Session
Сессия пользователя.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ID | [string](#string) |  | Идентификтор сессии. |
| UserID | [string](#string) |  | Идентификаотр пользователя. |
| CreatedAt | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | Дата время создания сессии. |
| ClosedAt | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | Дата время закрытия сессии. |






<a name="github.com.EmptyShadow.eltech.journal.api.Tokens"></a>

### Tokens
Токены клиента.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Access | [string](#string) |  | Токен доступа к приватным методам API. |
| Refresh | [string](#string) |  | Токен для обновления пары токенов. |






<a name="github.com.EmptyShadow.eltech.journal.api.User"></a>

### User
Пользователь.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ID | [string](#string) |  | Идентификатор в формате UUID. |
| Email | [string](#string) |  | Электронная почта. |
| Pwd | [bytes](#bytes) |  | Соленный пароль. |
| FullName | [FullName](#github.com.EmptyShadow.eltech.journal.api.FullName) |  | Полное имя. |
| Roles | [Role](#github.com.EmptyShadow.eltech.journal.api.Role) | repeated | Роли которые есть у пользователя. |
| CreatedAt | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | Дата создания записи. |
| UpdatedAt | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | Дата обновление полей записи. |
| DeletedAt | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | Дата удаления записи. |





 


<a name="github.com.EmptyShadow.eltech.journal.api.ProfileStatus"></a>

### ProfileStatus
Статус в котором может быть профиль.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ON_VALIDATE | 0 | Профиль находится на валидации и его действия не будут работать. |
| ACTIVE | 1 | Профиль активирован. |
| DISABLE | 2 | Профиль выключен. |
| BLOCKED | 3 | Профиль заблокирован. |



<a name="github.com.EmptyShadow.eltech.journal.api.Role"></a>

### Role


| Name | Number | Description |
| ---- | ------ | ----------- |
| ADMIN | 0 |  |
| STUDENT | 1 |  |
| TEACHER | 2 |  |


 

 

 



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

