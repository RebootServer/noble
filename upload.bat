@echo off

cd C:\Users\rlaal\OneDrive\바탕 화면\테스트\Noble

REM 변경 사항 스테이징
git add .

REM 커밋
git commit -m "커밋 메시지를 입력하세요."

REM 원격 저장소에서 변경사항 가져오기
git pull origin main

REM 변경 사항 다시 푸시
git push origin main

echo "업로드 완료"
pause