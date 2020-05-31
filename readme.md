# 개발 공부한 것 정리
맨날 공책에만 적으니까 정리가 잘 안되고 지저분한 느낌이 있다.  
깔끔하게 정리해보자. 현재 관심있는 카테고리별로 정리하자.
## Javascript
#### # this
 - 자바스크립트에선 모든 함수에 this를 사용할 수 있다.
 - this 값은 `런타임`에 결정된다. 컨텍스트에 따라 달리진다.
 - 화살표 함수는 일반 함수와 달리 고유한 this를 갖지 않는다. 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 '평범한' 외부 함수에서 this 값을 가져온다.
## Mongo DB
#### # 다수의 컬렉션 간에 관계를 설정하는 방법.
한 컬렉션에 속성을 아래와 같이 설정 ('User'은 예시)
>속성명 : {type : Schema.Types.ObjectId, ref : 'User'}  

collection에 insert 할 땐 속성에 해당 컬렉션의 Object Id를 할당하고 insert.

조회할 땐 populate로 타 collection과 연동하여 조회.
> collection.find({}).populate('속성명')
#### # mongoose에서 String -> ObjectId 변환
> mongoose.Types.ObjectId("String type ObjectId")
## Node + express

## React

## 프론트

## 백엔드
#### # [HTTP 상태 코드](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)

## Java + Spring

## git
#### # commit 하기 전에 잘못된 것은 없는지 다시 확인하자.
#### # 나의 git 사용 흐름
    1) branch에 기능 구현, 테스트
    2) master에 통합
    3) origin에 push
#### # git flow
    git-flow 전략은 소프트웨어의 소스코드를 관리하고 출시하기 위한 '브랜칭 관리 전략branch management strategy’이다
     - matser : 제품으로 출시될 수 있는 브랜치
     - develop : 다음 출시 버전을 개발하는 브랜치
     - feature : 기능을 개발하는 브랜치
     - release : 이번 출시 버전을 준비하는 브랜치
     - hotfix : 출시 버전에서 발생한 버그를 수정하는 브랜치
## REST API
#### # URL Rules
 - 마지막에 / 포함 X
 - 언더바(_) 대신 대쉬(-) 사용
 - 소문자 사용
 - 행위는 URL에 포함하지 않음
 - 컨트롤 자원을 의미하는 URL은 예외적으로 동사 허용 ( 컨트롤 자원이 뭐야... )