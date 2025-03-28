// 'KMS.XML' ������ �ҷ����� fetch ��û
fetch('KMS.XML')
  .then(response => response.text())  // ������ �ؽ�Ʈ �������� ��ȯ
  .then(xmlString => {
    // XML �����͸� �Ľ�
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    // "Cap" ���丮 ã��
    const capDir = xmlDoc.querySelector('dir[name="Cap"]');

    // "Cap" ���丮 ���� ��� "dir" ��� ��������
    const dirs = capDir ? capDir.querySelectorAll('dir') : [];

    // HTML���� ����Ʈ�� ǥ���� ��� ��������
    const itemList = document.getElementById('itemList');

    // �������� ������ ����Ʈ�� ǥ��
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