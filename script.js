// 'KMS.XML' 파일을 불러오는 fetch 요청
fetch('KMS.XML')
  .then(response => response.text())  // 응답을 텍스트 형식으로 변환
  .then(xmlString => {
    // XML 데이터를 파싱
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    // "Cap" 디렉토리 찾기
    const capDir = xmlDoc.querySelector('dir[name="Cap"]');

    // "Cap" 디렉토리 내의 모든 "dir" 요소 가져오기
    const dirs = capDir ? capDir.querySelectorAll('dir') : [];

    // HTML에서 리스트를 표시할 요소 가져오기
    const itemList = document.getElementById('itemList');

    // 아이템이 있으면 리스트에 표시
    if (dirs.length > 0) {
        dirs.forEach(dir => {
            const id = dir.getAttribute('name');
            const name = dir.querySelector('string[name="name"]').getAttribute('value');
            const listItem = document.createElement('li');
            listItem.textContent = `${id}: ${name}`;
            itemList.appendChild(listItem);
        });
    } else {
        itemList.innerHTML = '<li>No items found.</li>';
    }
  })
  .catch(error => {
    console.error('Error loading XML:', error);
  });