# 개발 공부한 것 정리
맨날 공책에만 적으니까 정리가 잘 안되고 지저분한 느낌이 있다.  
깔끔하게 정리해보자. 현재 관심있는 카테고리별로 정리하자.
## Javascript

## Mongo DB
#### 다수의 컬렉션 간에 관계를 설정하는 방법.
한 컬렉션에 속성을 아래와 같이 설정 ('User'은 예시)
>속성명 : {type : Schema.Types.ObjectId, ref : 'User'}  

collection에 insert 할 땐 속성에 해당 컬렉션의 Object Id를 할당하고 insert.

조회할 땐 populate로 타 collection과 연동하여 조회.
> collection.find({}).populate('속성명')
## Node + express

## React

## 프론트

## 백엔드
#### [HTTP 상태 코드](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)

## Java + Spring

## git

## REST API
#### URL Rules
 - 마지막에 / 포함 X
 - 언더바(_) 대신 대쉬(-) 사용
 - 소문자 사용
 - 행위는 URL에 포함하지 않음
 - 컨트롤 자원을 의미하는 URL은 예외적으로 동사 허용 ( 컨트롤 자원이 뭐야... )