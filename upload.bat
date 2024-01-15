@echo off

cd C:\Users\rlaal\OneDrive\바탕 화면\테스트\Noble
upload_to_github.bat

REM Git 초기화 (이미 초기화되어 있다면 생략)
git init

REM GitHub 저장소 연결
git remote add origin https://github.com/RebootServer/Noble.git

REM 현재 날짜와 시간 가져오기
set "current_datetime=%DATE% %TIME%"
set "current_datetime=%current_datetime: =%"

REM 변경 사항 스테이징 및 커밋
git add .
git commit -m "%current_datetime%"

REM GitHub로 푸시
git push -u origin main

echo "업로드 완료"
pause