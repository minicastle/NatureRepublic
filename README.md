- - -
# 정성민의 Original Project - NatureRepublic 제고조사용 파일생성기
## 1. Original Project 개발 이유
---
> 네이쳐 리퍼블릭에서 일하시는 분이 제게 제고정리를 할때 사용할 제고조사용 파일생성기를 제작해 달라고 부탁을 하게 되어 제작을 하게 되었습니다. <br>
네이쳐의 사이트가 노후화된 상태로 방치되어 데이터가 실제고와 맞지않는 경우가 많고 이를 떠나서 한달에 2번 제고정리를 하는 업종인 점에서 필요하다는 생각이 들어 사이트에서 Xlsx파일을 받아오고<br>
그안에서 필요한 품목의 수량과 실수량을 대조할수 있는 Xlsx파일을 만들어 제고정리에 조금이라도 도움이 되었으면 하는 마음에 만들게 되었습니다.

---
## 2. 추출방법 & 사용 방법
---
추출방법
1. git clone https://github.com/minicastle/NatureRepublic.git  [DIR]
    - Git Hub에서 파일을 다운받는다.
2. npm install & npm run build
    - 실행에 필요한 파일을 다운받고 build를 통해 최적화된 파일을 생성한다.
3. npm run electronbuild OR npm run electronbuild32
    - 파일을 설치할 컴퓨터가 64비트라면 electronbuild64 32비트라면 electronbuild32를 입력한다.
4. dist 경로에 위치한 NatureRepublic [version] .exe 파일을 설치한다.

사용방법
 - ./Test 폴더에 있는 원본데이터.xls 파일과 품목표.txt 파일을 다운로드 받고 <br> Nature Republic 사용법.txt
 내부의 방법을 따라서 실행해보시면 사용법을 알수 있습니다.<br>
 ./Test 파일의 complete(1).xlsx는 결과 파일입니다.


---
## 3. 개발과정
---
>## 1. CRA(Create React App)을 이용하여 React 환경구축
> -  간단한 Original Project 이기 때문에 CRA를 통해 개발환경을 구축하였습니다.
>> CRA는 사용하지 않는 기능들도 들어가기 때문에 최적화에는 용이하지 않은 방법이지만 간단한 Original Project 이기 때문에 개발환경을 자동으로 설정해주는 CRA를 사용하였습니다.
>## 2. ElctronJS를 이용한 Desctop App 환경구축
> - ElectronJS는 기존의 web site를 개발하는 방법과 동일하게 개발한후 이를 Desctop App으로 변환해주는 라이브러리 입니다. 
>## 3. Framer Motion을 이용한 UI
> - MUI와 Component style같은 스타일 방식들을 한창 테스트 해볼생각에 많은 시도를 했던 시기 인것 같습니다. 지금은 Component style로 굳혀졌지만 Framer Motion도 나름 호평을 받았었기 때문에 UI제작시 시도해 보았습니다.
>## 4. Xlsx를 이용해 데이터의 Read & Write 구현
> - Xlsx 라이브러리를 통해 xlsx 파일을 받아올때 내부의 데이터를 Object in Array 형태로 State에 저장하고 txt파일로부터 코드를 받아와 필요한 부분만 추출한 파일을 다운로드 할수 있도록 제작하였습니다.
---
## 4. 개발이후 생각한 사이트 개선점 & 배운점
---
## 개선점
> 1. UI개선 및 사용법 개선
> - 친분이 있는 분을 위해 제작 하다보니 사용 가능할 정도만 부탁한다고 받았기에 UI 및 사용법에서 부족한 부분이 많이 있습니다. Drag & Drop방식을 입혀 사용한다거나 혹은 Database 형태로 변형해 Xlsx형태로 변환하는게 아닌 보고서 페이지 형태로 변환해서 redux를 이용해 데이터를 저장해 두었다면 조금더 사용성이 좋아지지 않았을까 생각합니다.
## 배운점
> 1. Xlsx 라이브러리 사용법
> -  일반적으로 사용할 일이 없던 라이브러리 였지만 Desctop App을 만들때 도움이 될만한 라이브러리를 배웠다고 생각합니다. <br>
Xlsx를 읽어와 배열 혹은 JSON형태로 변형한다면 이후에 데이터베이스로 변환해 서버에 업로드 한다거나 혹은 업무용 Desctop App을 만들어 사용할때 분명 도움이 될것 이라고 생각합니다.
---
### ◤ 정성민의 다른 프로젝트 ◢
| Project Name              | Source Code           | Original Site             |
| :--                       | :--:                  | :--                       |
|[포트폴리오](https://minicastle.github.io/portpolio/)|||
|[Colco(Clone)](https://minicastle.github.io/Clone-Colco/)|[git](https://github.com/minicastle/Clone-Colco)|[Colco(origin)](https://colco.app/)|
|[Jolly-Flow(Clone)](https://minicastle.github.io/Clone-JollyFlow/)|[git](https://github.com/minicastle/Clone-JollyFlow)|[Jolly-Flow(origin)](https://jollyflow.webflow.io/)|
|[kakao(Clone)](https://minicastle.github.io/Clone-Kakao/)|[git](https://github.com/minicastle/Clone-kakao)|[kakao(origin)](https://www.kakaocorp.com/page/)|
|Audio Effector(original)|[git](https://github.com/minicastle/AudioEffector)||

> [정성민의 GitHub](https://github.com/minicastle)

> ### 이메일 링크: <minicastle@kakao.com>
---
## ※개발에 사용된 언어 및 npm package※
---
|Package Name                 	| version  	    |
| :--                         	| :--:     		|
|@testing-library/jest-dom      |^5.14.1        |
|@testing-library/react         |^11.2.7        |
|@testing-library/user-event    |^12.8.3        |
|react-dom                      |^17.0.2        |
|react-scripts                  |4.0.3          |
|web-vitals                     |^1.1.2         |
|electron                       |^15.3.0        |
|electron-builder               |^22.13.1       |
|framer-motion                  |^4.1.17        |
|react                          |^17.0.2        |
|wait-on                        |^6.0.0         |
|xlsx                           |^0.17.3        |
|xlsx-style                     |^0.8.13        |
---