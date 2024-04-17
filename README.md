# 박진현 202030213
## 2024-04-03 React 5주차 강의 내용
### 5.1 컴포넌트에 대해 알아보기
----
* 2장에서 설명한 바와 같이 리액트는 컴포넌트 기반의 구조를 가짐.
* 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는것을 의미함.
* 컴포넌트는 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있음.
* 컴포넌트는 자바스크립트 함수처럼 입력과 출력이 있다는 면에서 유사함.
* 다만 입력은 props가 담당함.

### 5.2 Props에 대해 알아보기
---
## 1. Props의 개념
* props는 prop(property:속성, 특성)의 준말.
* 이 props가 바로 컴포넌트의 속성.
* 이 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됨.
* props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체

## 2. Props의 특징
* 읽기 전용. 변경할 수 없다는 의미
* 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달.

## 3. Props 사용법
* JSX에서는 key-value쌍으로 props를 구성함.

### 5.3 컴포넌트 만들기
---
## 1. 컴포넌트의 종류
* 리액트 초기 버전들 사용할 때는 클래스형 컴포넌트를 주로 사용함.
* 이후 Hook라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용함.
* 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에, 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 함.

## 2. 함수형 컴포넌트
* Welcome컴포넌트는 props를 받아, 받은 props중 name키의 값을 "안녕"뒤에 넣어 반환.

## 3. 클래스형 컴포넌트
* Welcome컴포넌트는 React.Component class로 부터 상속을 받아 선언함.

## 4. 컴포넌트 이름 짓기
* 이름은 항상 대문자로 시작.
* 리액트는 소문자로 시작하는 컴포넌트를 DOM태그로 인식하기 때문.
* 컴포넌트 파일 이름과 컴포넌트 이름은 같게 함.


### 5.4 컴포넌트 합성
---
* 컴포넌트 합성은 여러개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것.
* 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있음.
* 다음 코드에서는 props의 값을 다르게 해서 Welcome 컴포넌트를 여러 번 사용함.

### 5.5 컴포넌트 추출
---
* 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있음.
* 큰 컴포넌트에서 일부를 추룰해서 새로운 컴포넌트를 만드는 것.
* 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는것이 좋음.

### 6.1 state
---
## 1. state란?
 * State는 리액트 컴포넌트의 상태를 의미함.
 * 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미함.
 * 정확히는 컴포넌트의 변경가능한 데이터를 의미함.
 * State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 함.
 
 ## 2. state의 특징
 * 리액트 만의 특별한 형태가 아니라

 ### 6.2 생명주기에 대해 알아보기
 ---
 * 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것.
 * constructor가 실행 되면서 컴포넌트가 생성.
 * 생성 직후 componentDidMount() 함수가 호출.
 * 컴포넌트가 소멸하기 전까지 여러 번 렌더링.
 * 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐.
 * 그리고 렌더링이 끝나면 componentDidUpdate()함수가 호출됨.
 * 마지막으로 컴포넌트가 언마운트 되면 componentWillmount()함수가 호출.


## 2024-03-27 React 4주차 강의 내용
### 3.1 JSX (JavaScript XML) 란?
----
* Javascript에 XML을 추가한 확장 문법.
>http://ko.reacts.org/docs/introducing.jsx.html


### 3.2 JSX의 역할
----
* #### JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환함.
* #### React 가 createElement함수를 사용하여 자동으로 자바스크립트로 변환함.
* #### 만일 JS작업할 경우 직접 createElement함수를 사용해야 함.
* #### 앞으로 설명하는 코드를 보면 알수 있지만 결국 JSX는 가독성을 높여 주는 역할을 함.

### 3.3 JSX의 장점
---
* 코드가 간결해짐.
* 가독성 향상
* In

### 3.4 JSX 사용법
---
* 모든 자바스크립트 문법을 지원함.
* 자바스크립트 문법에 XML과 HTML을 섞어서 사용
* 아래 코드의 2번 라인처럼 섞어서 사용
>const name = '소플';<br>
const element = h1> 안녕, {name} h1> <br>
ReactDom

### 4.1 엘리먼트에 대해 알아보기
---
1. 엘리먼트의 정의
* 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
* 공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들"이라고 설명함
* 웹사이트의 경우는 DOM엘리먼트이며 HTML요소를 의미함

### 리액트 엘리먼트와 DOM엘리먼트의 차이

* 리액트 엘리먼트는 Virtual DOM의 형태를 취하고 있음.
* DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무거움.
* 반면 리액트 엘리먼트는 변화한 부분만 갖고있어 가벼움.

2. 엘리먼트의 생김새
* 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재
* 컴포넌트, 속성 및 내부의 모든 children을 포함하는 일반 JS객체
* 이 객체는 마음대로 변경할 수 없는 불변성을 갖고있음.

3. 엘리먼트의 특징 <br>
>리액트 엘리먼트의 가장 큰 특징은 불변성. 즉 한번 생성된 엘리먼트의 children이나 속성(attribute)을 바꿀 수 없음.

### 만약 내용이 바뀌면 ?
* 이 때는 컴포넌트를 통해 새로운 엘리먼트를 생성.
* 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꿈.
* 이렇게 교체하는 작업을 하기 위해 Virtual DOM을 사용함.

### 4.2 엘리먼트 렌더링하기
---
Root DOM node

다음 html 코드는 id값이 root인 div태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드. <br>
이 div태그 안에 리액트 엘리먼트가 렌더링 되며, 이 것을 Root DOM node라고 함.
><div id = "root"></div>

엘리먼트를 렌더링하기위해서는 다음과 같은 코드가 필요.

### 4.3 렌더링된 엘리먼트 업데이트하기
---
* 다음 코드는 tick()함수를 정의하고 있음.
* 이 함수는 현재 시간을 포함한 element를 생성해서 root div에 렌더링해줌.
* 라인 12에 setInterval()함수를 이용해 위에서 정의한 tick()을 1초에 한번씩 호출하고 있음.
* 결국 1초에 한번씩 element를 새로 만들고 그것을 교체하는 것.
* 다음 코드를 실행하고, 크롬 개발자도구에서 확인해보면 시간 부분만 업데이트 되는것을 확인할 수 있음.
> function tick(){
    const element = (
        <div>
        <h1>안녕,리액트!</h1>
        <h2>현재 시간 : {new Date().toLocaleTime}
    )
}






## 2024-03-20 React 3주차 강의 내용  
<br>

## Chapter 1.리액트 

### 1.1 리액트는 무엇인가?
----
<br>

#### -웹 및 앱 유저 인터페이스를 위한 라이브러리-  
#### -The Library for Web and Native User Interfaces.-
>##### (공식 사이트: react.dev)
<br>

* #### 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기위해 만들어진 것.
* #### 다른 표현으로는 SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구.  
<br>

### 1.2 리액트의 장점  
----
<br>

#### 1.빠른 업데이트와 랜더린 속도  
> * ##### Virtual DOM
> * ##### DOM(Document Object Model)이란 XML, HTML문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스. (W3C의 표준)
> * ##### Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느려 고안된 방법.  
> * ##### DOM - 동기식, Virtual DOM - 비동기식 -방법으로 랜더링 (동기식은 일부분이 바껴도 전체적으로 바꿈, 비동기식은 일부분만 바꿈.)
<br>

#### 2.컴포넌트 기반 구조  
> * ##### 리액트의 모든 페이지는 컴포넌트로 구성됨.
> * ##### 하나의 컴포넌트는 다른 여러개의 컴포넌트와의 조합으로 구성 가능.
> * ##### 리엑트로 개발 -> 레고 블록을 조립하는 듯한 방식으로 웹사이트 개발.
<br>

#### 3.재사용성  
> * ##### 반복적인 작업을 줄여 생산성을 높여줌.
> * ##### 유지보수
> * ##### 재사용이 가능할려면 의존성이 없어야함.  

<br>

#### 4.든든한 지원군
> * ##### 메타에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있음.
<br> 

#### 5.활발한 지식 공유 & 커뮤니티
<br>

#### 6.모바일 앱 개발가능
> * ##### 리액트 네이티브라는 모바일 환경 UI 프레임워크를 사용하면 크로스 플랫폼 모방일 앱을 개발 할 수 있음  
<br>

### 1.3 리액트의 단점
<br>

#### 1. 높은 상태 관리 복잡도
<br>  

## Chapter 2. 리액트 시작하기  
<br>

### 2.1 Create-react-app으로 만들기
<br>

## 3월 13일 강의 내용
### GitHub 사용법
