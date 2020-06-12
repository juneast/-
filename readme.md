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
#### # 웹서버 / WAS
웹서버 ex) Apache, Nginx, IIs
- HTTP 프로토콜 기반 클라이언트 요청 서비스
- 기능 1) WAS를 거치지 않고 정적인 컨텐츠 제공
- 기능 2) 동적인 컨텐츠 제공을 위한 클라이언트와 WAS 간의 통로 역할  

WAS ex) Tomcat, JBoss, Jeus
- DB조회나 다양한 로직 처리를 요구하는 동적인 컨텐츠를 제공하기 위해 만들어진 Application Server, 애플리케이션을 수행해주는 미들웨어다. http<-->APP
- 역할 : 웹 서버의 기능을 구조적으로 분리하고자 제시되었다. WAS = Web Server + Web Container
  - 주로 DB와 함께 사용되며, 분산 트랜잭션, 보안, 메시징, 쓰레드 처리 등의 기능을 처리하는 분산 환경에서 사용.
- 주요기능
  - 프로그램 실행 환경과 DB 접속기능 제공
  - 여러 개의 트랜잭션 관리 기능
  - 업무를 처리하는 비지니스 로직 수행

웹서버와 WAS를 분리하는 이유
- WAS 앞단에서 웹서버가 정적 컨텐츠는 모두 처리해 서버의 부하를 줄임.
- 무리적으로 분리해 보안 강화 : SSL 처리에 웹서버 이용
- 여러 대의 WAS 연결 가능 : 로드밸런싱, 장애처리
- 여러 웹 어플리케이션 서비스 가능 : java, c++, python ...
- 즉, 자원 이용의 효율성 및 장애극복, 분산처리, 배포 및 유지보수 편의성을 위해 분리한다.
#### # Apache
Client에서 요청을 받으면 MPM(다중처리모듈) 방식으로 요청을 처리하는데 대표적으로 Prefore 방식과 Worker 방식이 있다.
- Prefork MPM : 실행중인 프로세스를 복제해 처리한다. 각 프로세스는 한 연결만 처리하고 요청량일 많아질수록 프로세스는 증가하지만 복제시 메모리 영역까지 복제되어 동작하므로 프로세스간 메모리 공유가 없어 안정적이라 볼 수 있다.
- Worker MPM : Prefork 동작방식이 1개의 프로세스가 1개의 스레드로 처리가 되었다면 Worker 동작 방식은 1개 프로세스가 각각 여러 쓰레드를 사용하게 된다. 쓰레드간 메모리를 공유하며 Prefork 방식보다 메모리를 덜 사용한다는 장점이 있다.
- 두 방식을 프로세스와 스레드 사용의 장/단점을 그대로 가진다.
#### # Node.js
노드js는 싱글쓰레드 기반으로 동작하는 비동기IO(Async/Non-blocking IO)를 지원하는 네트워크 서버이다. 구글 크롬 v8엔진으로 개발되었고, Event-driven 프로그래밍 모델을 사용한다.
- 장점
   - 자바스크립트 기반, 개발 구조가 매우 단순화 되어있어 빠르게 개발이 가능하다.
   - 웹소켓(Socket.io)를 이용한 웹 push 구현이 매우 쉽다. node.js의 경우 브라우저 종류에 따라 웹소켓 뿐만 아니라 롱 폴링 등 다른 push 메카니즘을 자동으로 선택하여 사용한다.
   - io요청이 있으면 io처리를 던져놓고 다른 일을 하다가 처리가 끝나면 이에 대한 이벤트를 받아 응답을 처리한다.
 - 작동구조
   - 싱글쓰레드 기반의 이벤트루프가 돌면서 요청을 처리하며, 시스템적으로 논블라킹 io를 지원하지 않는 io호출의 경우 이를 비동기 처리하기 위해 내부 Thread pool을 별도로 이용해 처리한다. 그 위에 네트워크 프로토콜을 처리하는 소켓, http 바인딩 모듈이 로드되고, 맨 윗단에 standard library(파일 핸들링, 콘솔 등)이 로드된다.
 - 적합한 환경
   - Async IO를 사용하기 때문에 file upload/download와 같은 네트워크 스트리킹 서비스에 유리하다.
   - 채팅서비스를 socket.io로 쉽게 구현 가능하며, single page app 개발에 좋다.
   - 가볍고 생상성 높은 웹 개발 프레임워크를 가지고 있고, 간단한 로직을 가지면서 대용량 그리고 빠른 응답 시간을 요구하는 앱에 적합하다.
 - 부적합한 환경
   - CPU작업이 많은 앱에 적당하지 않다. 싱글쓰레드가 하나의 요청에 cpu를 많이 사용하면 다른 요청들이 줄줄이 지연된다. 
   - js 특성상 런타임에 오류가 나타나기 때문에 서버가 죽어버릴 수 있다.
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
 - 켓문자 사용
 - 행위는 URL에 포함하지 않음
 - 컨트롤 자원을 의미하는 URL은 예외적으로 동사 허용 ( 컨트롤 자원이 뭐야... )
## Nginx 설정
#### # 설정 파일 종류
|이름|설정| 
|:---:|:---:| 
|nginx.conf|애플리케이션의 기본 환경 설정|
|mime.types|파일 확장명과 MIME 타입 목록|
|fastcgi.conf|FastCGI 관련 환경 설정|
|proxy.conf|프록시 관련 환경 설정|
|sites.conf|엔진엑스에 의해 서비스되는 가상 호스트 웹사이트 환경설정.  도메인마다 파일을 분리해서 만들 것을 권장|
#### # 서버블록
http 블록 안에는 한 개 이상의 서버 블록을 선언할 수 있다. 하나의 server 블록은 하나의 가상 호스트를 구성한다.
```
server {
        listen       3333;
        server_name  localhost;

        location / {
            proxy_pass http://nodejs_server;
        }
        location = /50x.html {
            root   html;
        }

}
```
location 블락은 해당 서버내에서 url에 따라 다른 동작을 하고 싶을 때 사용한다.
#### # Upstream
````
upstream nodejs_server {
	#least_conn;
	#ip_hash;
	server localhost:3000 weight=10 max_fails=3 fail_timeout=2s;
	server localhost:3001 weight=10 max_fails=3 fail_timeout=2s;
	server localhost:3002 weight=10 max_fails=3 fail_timeout=2s;
	server localhost:3003 weight=10 max_fails=3 fail_timeout=2s;
    }
````
Nginx에서 Origin 서버를 지정해준다. 주소와 포트를 명시하고 옵션과 알고리즘을 조합해 분산 방법을 결정할 수 있다. 디폴트 알고리즘은 가중치 라운드로빈 방식이다.
옵션은 아래와 같다!
- ip_hash : 클라이언트 ip 주소에 따라 서버에 분산한다. 같은 ip면 같은 서버로 분산된다.
- least_conn : active connection이 가장 적은 서버에 분산한다.
- least_time : 평균 응답 시간이 가장 작은 서버에 분산한다.
- weight : 업스트림 서버의 가중치
- max_fails : 설정한만큼 실패가 일어나면 서버가 죽은 것으로 간주
- fail_timeout : 설정한 시간만큼 응답이 없으면 실패
- down : 해당 서버를 사용하지 않게 지정. ip_hash 지시어가 설정된 상태에서만 유효
- backup : 모든 서버가 동작하지 않을 때 backup으로 표시한 서버만 사용, 그 전엔 동작 X
- keepalive : 업스트립서버연결의 캐시를 활성화한다. 개수를 지정할 수 있으며 개수 초과시 LRU로 캐시 교체

참고 : https://opentutorials.org/module/384/4328  
http://nginx.org/en/docs/http/ngx_http_upstream_module.html#zone
## 네트워크
#### # 캐시 설정
 - Cache Control
    - Cache-Control http 헤더를 통해 캐싱 정책을 정의
    - 지시문은 응답을 캐시할 수 있는 사용자, 해당 조건 및 기간을 제어한다.
    - 헤더는 HTTP 1.1 사양의 일부로 정의되었고, 이전의 Expires를 대체
    - 모든 최신 브라우저에서 지원
    - 응답뿐아니라 요청 헤더로도 사용 가능
    - 프론트 - 중개서버 - 서버와 같은 구조에서 중개 서버에 있는 캐시를 가져오지 않으려면 요청에 Cache-control을 넣어 주기도 한다.
 - no-cache / no-store
    - no-cache는 캐시를 사용하지 말란 뜻이 아니라 캐시를 쓰기 전에 써도 되는지 물어보라는 뜻이다.
    - no-store은 아무것도 캐시하지 않으려면 사용한다.
 - public과 private
    - public이면 공유캐시(또는 중개 서버)에 저장해도 된다는 뜻이다.
    - 대부분 명시적 캐싱 정보(Max-age) 응답이 어떤 경우든 캐시 가능하다고 나타내기에 'public'이 불필요해진다.
    - private은 특정 사용자 환경에만 저장하라는 뜻이다.
    - 예를들어 비공개 사용자 정보가 들어간 페이지는 사용자 브라우저가 캐시할 수 있지만, CDN은 캐시할 수 없다.
 - must-revaldiate : 만료된 캐시만 서버에 확인을 받도록 한다.
 - Age : 캐시 응답 때 나타나는데, max-age 시간 내에서 얼마나 흘렀는지 초 단위로 알려준다.
 - Expires
    - 캐시 컨트롤과 별개로 적용가능.
    - 응답컨텐츠가 언제 만료되는지 나타내며, Cache-Control에 Max-Age가 있는 경우 이 헤더는 무시
 - Etag
    - Etga로 캐시된 응답에 대한 유효성 검사 수행
    - 유효성 검사 토큰을 사용해 리소스 업데이트를 검사하며 변경되지 않은 경우 데이터가 전송되지 않음
    - 캐시 유효기간이 만료됐을때 자원이 변하지 않았어도 요청하는 낭비를 없애기 위한 방법
    - 서버는 파일 콘텐츠가 해시나 기타 일부 지문을 이용해 임의 토큰을 생성하고 반환.
    - 클라이언트는 다음 요청시 지문을 서버에 전송. 지문이 동일한 겨우 리소스가 변경되지 않고 다운로드를 건너뜀
 - If-None-Match
    - 서버보고 Etag가 달라졌는지 검사하고 Etag가 다를 경우에만 컨텐츠를 새로 받는다.
    - 만약 Etag가 같다면 서버는 304 Not Modified를 응답하고 캐시를 그대로 사용
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
## 데이터베이스
#### # 맵리듀스
- 여러 노드에 테스크를 분배하여 처리하는 방법이다.
- 하둡에서는 계산시 큰 파일을 블럭단위(64MB)로 나누고 모든 블럭은 같은 Map 작업을 수행하고 이후 Reduce 작업을 수행한다.
- 동작과정은 Input Split -> Mapping -> Shuffling -> Reducer -> Output 순서가 된다.