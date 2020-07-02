import './style.scss';
import * as test from '@ts/sample/test';
import { commonApi } from '@ts/utils/API/config';
import { endPoints } from '@ts/utils/API/endpoints';
import { renderBox } from '@ts/react/Box';

document.addEventListener('DOMContentLoaded', () => {
  const testGetButton = document.getElementById('testGet');

  testGetButton?.addEventListener('click', async () => {
    try {
      const { data } = await commonApi.get(endPoints.testArray);
      alert(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  });

  const testAnotherFileButton = document.getElementById('testJs');
  testAnotherFileButton?.addEventListener('click', async () => {
    test.testAlert(test.testString);
  });

  renderBox(
    { width: 200, height: 300 },
    document.getElementById('box-container') as HTMLElement
  );
});
