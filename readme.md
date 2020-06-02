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
#### # mongoose에서 update 반환값
수정을 하기 위해 updateOne을 사용하면 수정된 doc이 아닌 수정 정보를 반환 받는다.

수정된 doc을 반환받고 싶다면 findOneAndUpdate를 사용한다. 
>     const targetCount = this.findOneAndUpdate( {name}, {$inc :{lastNum:1} },{upsert:true,new:true});
특히 옵션에 `{upsert:true,new:true}`를 사용한다.  
`upsert:true`만 사용하면 doc이 생성되었을 땐 null을 반환하기 때문에 `new:true`도 명시해 새로 생성되었을 때도 생성된 값을 반환하게 한다.
## Node + express

## React

## 프론트

## 백엔드
#### # [HTTP 상태 코드](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)
#### # CI / CD
 - CI : 개발자를 위한 자동화 프로세스인 지속적인 통합. 새로운 코드 변경 사항이 정기적으로 빌드 및      테스트되어 공유 리포지토리에 통합되므로 여러 명의 개발자가 동시에 애플리케이션 개발과 관련된 코드 작업을 할 경우 서로 충돌할 수 있는 문제를 해결.
 - CD : 지속적인 배포(제공). 개발자의 변경 사항을 리포지토리에서 고객이 사용 가능한 프로덕션 환경까지 자동으로 릴리즈.
 - Travis CI / Jenkins 등 여러 도구가 있음.
#### # TDD
    - 유지보수성을 높이고 버그 발생 가능성을 줄인다. 또한 가독성 좋은 코드를 작성할 수 있다.
    - RED - GREEN - REFACTOR 를 반복한다.
    - RED : 실패하는 테스트를 만들어라.
    - GREEN : 테스트를 통과하도록 코드를 작성하라.
    - REFACTOR : 불필요한 코드를 삭제하라.
## Java + Spring

## git
#### # commit 하기 전에 잘못된 것은 없는지 다시 확인하자.
#### # 나의 git 사용 흐름
    1) branch에 기능 구현, 테스트
    2) master에 통합
    3) origin에 push
#### # git flow
    git-flow 전략은 소프트웨어의 소스코드를 관리하고 출시하기 위한 '브랜칭 관리 전략branch management strategy’이다
     - master : 제품으로 출시될 수 있는 브랜치
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

## 네트워크
#### # 웹소켓
웹소켓 연결되어 있는 하나의 커넥션에서 낮은 레이턴시로 쌍방향 커뮤니케이션을 하기 위한 통신 규약이다.  
빠른 속도로 유입되는 요청을 실시간으로 유저에게 전달될 수 있을 뿐만 아니라, 유저가 요청을 보낼 때마다 HTTP 리퀘스트를 보낼 필요가 없기 때문에 서버 리소스를 효과적으로 사용할 수 있다.
- 등장배경
  - 데이터 수신을 위해 클라이언트가 서버에 요청하는 폴링 방식을 보완하기 위함.
  - 비교적 최적의 대안이었던 Comet 역시 무의미한 반복 요청을 피하기위해 연결 유지 기법이 적용됐지만 일정 시간 이후에는 연결을 종료하고 다시 안결해야 했기에 Long-Polling 이라고 불렸다.
 - 특징
   - 웹소켓은 접속 확립에 http를 사용하지만, 그 이후는 독자적 프로토콜(ws)로 이루어진다.
   - header가 작아 overhead가 적다.
   - 송신과 수신에 커넥션을 맺을 필요가 없어, 하나의 커넥션으로 데이터를 송수신한다.
   - 장시간 접속 전제로 하기 때문에, 접속 상태라면 클라이언트나 서버로부터 데이터 송신이 가능하다.
 - 웹소켓이 필요한 경우
   - 실시간 양방향 데이터 통신
   - 많은 수의 동시 접속사 허용
   - 브라우저에게 TCP 기반의 통신으로 확장해야 하는 경우
   - 개발자에게 사용하기 쉬운 API가 필요한 경우
   - 클라우드 환경이나 웹을 넘어 SOA(Service Oriented Architecture)로 확장해야 하는 경우