const draggables = [];
const offset = {};

export const registerForDraggable = (element) => {
  if (draggables.includes(element)) {
    console.warn('already registered element');
    return;
  }
  draggables.push(element);

  element.addEventListener('mousedown', async (e) => {
    element.setAttribute('dragged', '');
    element.style.userSelect = 'none';
    offset.x = e.offsetX;
    offset.y = e.offsetY;
    if (e.path[0] !== element) {
      offset.x += e.path[0].offsetLeft;
      offset.y += e.path[0].offsetTop;
    }
  });
}

window.addEventListener('mousemove', (e) => {
  const current = draggables.filter(d => d.hasAttribute('dragged'))[0];
  if (current) {
    current.style.position = 'absolute';
    current.style.top = `${e.y - offset.y}px`;
    current.style.left = `${e.x - offset.x}px`;
  }
});

window.addEventListener('mouseup', () => {
  const current = draggables.filter(d => d.hasAttribute('dragged'))[0];
  if (current) {
    current.removeAttribute('dragged');
    current.style.userSelect = 'initial';
  }
});


window.addEventListener('load', () => {
  for (const el of document.body.querySelectorAll('.draggable')) {
    registerForDraggable(el);
  }
});