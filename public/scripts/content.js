document.addEventListener('DOMContentLoaded', () => {
  if (document.contentType === 'application/json') {
    const viewer = document.createElement('iframe');
    viewer.src = chrome.runtime.getURL('index.html');
    viewer.style =
      'position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 9999999999;';
    document.querySelector('body').appendChild(viewer);
    viewer.addEventListener('load', () => {
      viewer.contentWindow.postMessage(
        {
          type: 'JSON_VIEWER_DATA',
          data: JSON.parse(document.body.innerText),
        },
        '*',
      );
    });
  }
});
