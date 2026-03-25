# 과제 제출 가이드

## 기본 원칙
- 과제는 별도 개인 레포 대신 이 공용 레포에서 관리합니다.
- 다만 작업은 공용 레포가 아니라, 본인이 fork한 레포의 `main` 브랜치에서 진행합니다.
- 본인 작업물은 본인 fork 레포의 `projects/<github-id>/` 아래에 정리합니다.
- 공용 레포 `main` 브랜치에는 학생 제출물을 두지 않습니다.
- 주차별 과제는 `week1`, `week2`, `final` 형태로 나눕니다.

## 제출 폴더 만들기
예시:

```text
projects/
  pahaha404/
    week1/
    week2/
    final/
```

본인 GitHub 아이디가 `pahaha404`라면 `projects/pahaha404/` 폴더를 사용하면 됩니다.

## fork 준비
1. GitHub에서 공용 레포를 본인 계정으로 `fork` 합니다.
2. 본인 fork 레포를 `clone` 합니다.
3. 필요하면 공용 레포를 `upstream`으로 추가해 최신 자료를 받아옵니다.

## 제출 순서
1. 본인 fork 레포를 `clone` 한 뒤, 현재 작업 위치가 본인 fork인지 확인합니다.
2. 본인 폴더가 없다면 `projects/<github-id>/`를 만들고, 과제 파일을 `projects/<github-id>/week1/` 같은 위치에 정리합니다.
3. 변경 사항을 확인한 뒤 커밋합니다.
4. 본인 fork 레포의 `main`으로 `push`합니다.
5. GitHub에서 본인 fork 레포 `main`에서 공용 레포 `main`으로 Pull Request를 생성합니다.
6. 운영자는 제출 확인 후 PR을 리뷰하고 닫습니다. 학생 제출 PR은 기본적으로 merge하지 않습니다.

예시 명령:

```bash
git clone https://github.com/pahaha404/2026-01-web-study.git
cd 2026-01-web-study
git add projects/pahaha404/week1
git commit -m "Add week1 assignment"
git push origin main
```

PR 제목 예시:

```text
[week1] pahaha404 제출
```

PR 처리 방식:

```text
compare: pahaha404:main
base: kmu-koss:main
result: 리뷰 후 close
```

## 권장 커밋 메시지
- `Add week1 assignment`
- `Update week1 button text and colors`
- `Add personal project draft`

## 제출 전 체크리스트
- 본인 GitHub 아이디 폴더에 넣었는지 확인
- 본인 fork 레포에서 작업했는지 확인
- 실행에 필요한 파일이 빠지지 않았는지 확인
- 다른 사람 파일을 수정하지 않았는지 확인
- 변경 사항이 정상 실행되는지 확인
- Pull Request 제목과 설명을 작성했는지 확인
- Pull Request가 제출 확인용이며 merge 대상이 아니라는 점을 이해했는지 확인

## 1주차 예시
- `week1/`의 예제 파일을 참고해서 본인 버전을 만듭니다.
- 이름, 만들고 싶은 사이트, 사용할 AI 도구, GitHub 아이디를 채웁니다.
- 버튼 문구, 색상, 클릭 시 문구를 원하는 내용으로 바꿉니다.
