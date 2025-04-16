<img src="https://github.com/user-attachments/assets/5fdb2b75-3b9a-48f8-860a-f87220384f09" alt="배너" width="100%"/>

<br/>
<br/>

# 📢시작하기

```bash
$ npm start
```

<br/>
<br/>

# 1.프로젝트 개요

## 포포(PawPaw)

- 프로젝트 설명: 공공 API를 통해 내 위치에 기반한 반려동물 동반 가능 장소를 추천하고, 산책메이트 찾기 서비스 및 채팅 기능을 제공하는 Mobile-First 웹 서비스
- 진행기간: 2024/12/17 - 2024/1/8(3주)
- 개발인원: 5명 (BE 2명 + FE 3명)

<br/>
<br/>

# 2. 팀원 및 팀 소개

|                                                        손석경                                                        |                                                        이서빈                                                        |                                                        이주영                                                        |                                                        하정우                                                        |                                                        한바울                                                        |
| :------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/7f938be0-8092-4deb-a292-bece1cde6911" alt="손석경" width="150"> | <img src="https://github.com/user-attachments/assets/f83312f7-6258-4986-b42b-38991d77d215" alt="이서빈" width="150"> | <img src="https://github.com/user-attachments/assets/3895cdc9-d328-4c66-ae91-1b9418212259" alt="이주영" width="150"> | <img src="https://github.com/user-attachments/assets/9560694b-2384-4ae0-91b8-256f4a5849cb" alt="하정우" width="150"> | <img src="https://github.com/user-attachments/assets/811ff8f0-0d4b-4501-b81f-7311f4085051" alt="한바울" width="150"> |
|                                                          BE                                                          |                                                          FE                                                          |                                                          FE                                                          |                                                          FE                                                          |                                                          BE                                                          |
|                                         [GitHub](https://github.com/SonSETO)                                         |                                         [GitHub](https://github.com/ry-lie)                                          |                                        [GitHub](https://github.com/jjyy0804)                                         |                                         [GitHub](https://github.com/jay7314)                                         |                                       [GitHub](https://github.com/Paul-Han97)                                        |

<br/>
<br/>

# 3. 사용자 플로우

<img src="https://github.com/user-attachments/assets/8451ad47-777b-4db8-90af-60b37110f3ef" alt="user-flow"  width="100%"/>

<br/>
<br/>

# 4. 주요 기능

- **커뮤니티**:

  - 메인페이지에서 커뮤니티의 인기글 및 최신글을 모아 볼 수 있습니다.
  - 카테고리별로 게시글을 모아 볼 수 있고, 검색을 통해 게시글을 쉽게 찾을 수 있습니다.
  - 게시글에 대해 좋아요 및 댓글 등록/수정/삭제가 가능합니다.

- **지도**:

  - 내 위치를 기반으로 반려동물 동반 가능 장소를 카테고리별로 마커 표시 하여 사용자에게 보여줍니다.
  - 장소에 대한 상세정보를 얻을 수 있으며, 리뷰 등록/수정/삭제가 가능합니다.

- **채팅**:

  - 내 위치를 기반으로 주변 사용자 (산책메이트 기능이 ON인 사용자)를 찾아 채팅을 보낼 수 있습니다.

- **마이페이지**:
  - 사용자의 반려동물을 등록/수정/삭제가 가능합니다.
  - 내 정보 수정을 통해 프로필사진/닉네임/비밀번호 변경이 가능합니다.
  - 내가 쓴 글, 내가 쓴 리뷰를 모아 볼 수 있습니다.

<br/>
<br/>

# 5. 화면 구성

## - 사용자 인증

<table>
  <tr>
    <td align="center"><strong>회원가입</strong></td>
    <td align="center"><strong>로그인</strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/bb9a144d-c67b-4dbc-a016-357def168069" alt="회원가입" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/079343b7-57e5-4325-b00f-4827a77fb653" alt="로그인" width="100%"/></td>
  </tr>
  <tr>
    <td align="center"><strong>카카오 로그인</strong></td>
    <td align="center"><strong>비밀번호 찾기</strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/1a0bd881-1dfd-434f-8903-3ba996c76ccf" alt="카카오 로그인" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/3cd78c40-8ce7-4f52-a4f7-fa3a80d26ffe" alt="비밀번호 찾기" width="100%"/></td>
  </tr>
</table>

## - 커뮤니티

<table>
   <tr>
    <td align="center"><strong>커뮤니티 1</strong></td>
    <td align="center"><strong>커뮤니티 2</strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/0eaebc92-5ec0-49ab-8c7c-56883077718e" alt="커뮤니티 기능1" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/f6ac61a0-3c8e-4213-9a73-3fbd079439c2" alt="커뮤니티 기능2" width="100%"/></td>
  </tr>
</table>

## - 위치 기반 장소 추천 및 산책메이트 찾기

<table>
  <tr>
    <td align="center"><strong>지도</strong></td>
    <td align="center"><strong>채팅</strong></td>
  </tr>
<tr>
  <td><img src="https://github.com/user-attachments/assets/690c3e88-751c-4997-afb5-de74d5662874" alt="지도" width="100%"/></td>
   <td><img src="https://github.com/user-attachments/assets/de19a40c-44c7-4ccd-8a75-57d85839650d" alt="채팅" width="100%"/></td>
</tr>
</table>

## - 마이페이지

<table>
  <tr>
    <td align="center"><strong>내 정보 수정</strong></td>
    <td align="center"><strong>내 글 조회 및 산책메이트 ON/OFF</strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/3f81fb07-bad6-4fbf-a9a4-525228c6b8d9" alt="내 정보수정" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/0aa5d4f6-2610-4ed9-b716-c5de094afe8a" alt="내 글 조회" width="100%"/></td>
  </tr>
  <tr>
    <td align="center"><strong>반려동물 수정</strong></td>
    <td></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/15ea8c02-7fd2-410c-8c88-d5bb1d0bf3ea" alt="반려동물 수정" width="100%"/></td>
    <td></td>
  </tr>
</table>

# 6. 작업 및 역할 분담

<img src="https://github.com/user-attachments/assets/c4122def-ba0f-4194-aed3-30854ee97abc" alt="역할" width="100%"/>

<br/>
<br/>

# 7. 기술 스택

## 7.1 Frotend

<img src="https://github.com/user-attachments/assets/640c8e48-2718-4ce2-9cd6-514e6b565de5" alt="frontend-technology" width="100%"/>

<br/>

## 7.2 Backend

<img src="https://github.com/user-attachments/assets/6d926a04-0cc4-4ed1-8729-9944be8ed2a1" alt="backend-technology" width="100%"/>

<br/>

## 7.3 Cooperation

|         |                                                                                                                      |
| ------- | -------------------------------------------------------------------------------------------------------------------- |
| Git     | <img src="https://github.com/user-attachments/assets/483abc38-ed4d-487c-b43a-3963b33430e6" alt="git" width="100">    |
| Discord | <img src="https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg" alt="discord" width="100">                |
| Notion  | <img src="https://github.com/user-attachments/assets/34141eb9-deca-416a-a83f-ff9543cc2f9a" alt="Notion" width="100"> |

<br/>

# 8. 프로젝트 구조

- frontend

```plaintext
project/
├── public/
│   ├── images               # 지도 마커 이미지 파일
│   └── favicon.ico          # 아이콘 파일
├── src/
|   ├── app/                 # page.tsx와 해당페이지에서 사용하는 컴포넌트 작성
│   ├── assets/              # 이미지, 폰트 등 정적 파일
│   ├── components/          # 재사용 가능한 공통UI 컴포넌트
│   ├── constants/           # 공통으로 사용하는 상수
│   ├── hooks/               # 커스텀 훅 모음
│   ├── lib/                 # api 관련 함수 모음
│   ├── stores               # zustand 관리 스토어 파일
│   ├── types                # 공통으로 사용하는 type 모음
│   ├── utils                # 공통으로 사용하는 util 함수 모음
│   ├── middleware.ts        # 권한없는 페이지 접근 제한
├── Dockerfile               # 도커 배포를 위한 파일
├── package-lock.json        # 정확한 종속성 버전이 기록된 파일로, 일관된 빌드를 보장
├──  package.json            # 프로젝트 종속성 및 스크립트 정의
├── .gitignore               # Git 무시 파일 목록
└── README.md                # 프로젝트 개요 및 사용법
```

<br/>
<br/>

# 9. 시연영상

[시연영상](https://youtu.be/UT26FDNM1I0)
