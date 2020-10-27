const input = document.getElementById('search-field');
const button = document.getElementById('search-btn');
const eventContent = document.getElementById('events-list');
let searchValue = '';

button.addEventListener('click', renderEvents);
input.addEventListener('change', (e) => { searchValue = e.target.value; });
input.addEventListener('blur', () => button.click());
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});

function renderEvents() {
  let list = kamazonData.slice();
  const searchParam = searchValue.toLowerCase();
  if (searchParam) {
    list = list.filter((item) => {
      if (item.title.toLowerCase().includes(searchParam)) {
        return true;
      }
      return item.answers.some((ans) => {
        return (`${ans.name} ${ans.text}`).toLowerCase().includes(searchParam)
      });
    });
  }

  const htmlRender = list.reduce((acc, curr) => {
    const answers = curr.answers.reduce((a,t) => {
      return a + (`
      <p className="kam-answers" style="margin: 0;padding: 0;-webkit-box-sizing: inherit;box-sizing: inherit;font-size: 1.4rem;position: relative;padding-left: 1rem;font-weight: 300">
        <span style="position:absolute;display:inline-block;top:1rem;left:0;width:3px;height:3px;border-radius:50%;background-color:red"></span>
        <strong style="font-weight:700;">${t.name}: </strong> ${t.text}
      </p>
      `
    )}, '')

    return acc + (`
        <div className="kam-event" style="margin: 1rem auto;padding: 1rem;-webkit-box-sizing: inherit;box-sizing: inherit;border-radius: .5rem;-webkit-box-shadow: 0 2px 8px rgba(0,0,0,0.2);box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
          <h2 className="kam-title" style="margin: 0;padding: 0;-webkit-box-sizing: inherit;box-sizing: inherit;font-weight: bold;line-height: 1.2;margin-top: 1rem;margin-bottom: 1rem;font-size: 1.4rem;">
            ${curr.title}
          </h2>
          ${answers}
        </div>
    `);
  }, '');

  eventContent.innerHTML = htmlRender;
}
renderEvents();