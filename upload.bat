<<<<<<< HEAD
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
=======
@echo off

cd C:\Users\rlaal\OneDrive\바탕 화면\테스트\Noble

REM Git 초기화 (이미 초기화되어 있다면 생략)
git init

REM GitHub 저장소 연결
git remote add origin https://github.com/RebootServer/Noble.git

REM 변경 사항 스테이징 및 커밋
git add .
git commit -m "winter"

REM GitHub로 푸시
git push -u origin main

echo "업로드 완료"
>>>>>>> ad2c6fb219128883ff701622fac3eb3c5a9a7c37
pause