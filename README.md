# Book Log

## 개요
독서 기록 관리 앱.

## 데모
![Image](https://github.com/user-attachments/assets/8cd8333f-f6ac-4fb6-9119-f4304226d1ed)

## 주요 기능
- 제목 혹은 저자 검색으로 원하는 책을 화면에 추가
- 페이지 수 기록으로 독서 진행 상황 추적
- 책에 대한 메모 작성
- 읽는 중/읽은 책 탭으로 독서 상태 관리

## 사용 기술
- React, React Native
- Expo
- Async Storage

## 프로젝트 구조
```
book-log
├─ App.js
├─ package.json
└─ src
   ├─ components
   │  └─ BookItem.js
   └─ screens
      ├─ AddBook
      │  ├─ AddBookScreen.js
      │  └─ styles.js
      ├─ BookDetail
      │  ├─ BookDetailScreen.js
      │  ├─ components
      │  │  ├─ BookActions.js
      │  │  ├─ NoteSection.js
      │  │  ├─ PageInput.js
      │  │  └─ ProgressBar.js
      │  ├─ hooks
      │  │  ├─ useBookData.js
      │  │  └─ useKeyboardStatus.js
      │  ├─ styles.js
      │  └─ utils
      │     ├─ bookStateHandlers.js
      │     └─ pageChangeHandlers.js
      └─ Home
         ├─ HomeScreen.js
         ├─ hooks
         │  └─ useBooks.js
         └─ styles.js
```
