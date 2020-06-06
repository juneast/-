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