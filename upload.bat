@echo off
echo 현재 디렉토리: %CD%

cd "C:\Users\rlaal\OneDrive\바탕 화면\테스트\noble"

REM 변경 사항을 스테이징하기 위해 모든 파일을 추가합니다.
git add .

REM 변경 사항을 커밋합니다.
git commit -m "winter."

REM 변경 사항을 원격 저장소로 푸시합니다.
git push origin main

echo "업로드 완료"
