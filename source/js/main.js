/* eslint-disable no-undef */
// console.js
'use strict';
console.log(String.raw`
          _____                    _____                    _____                    _____          
         /\    \                  /\    \                  /\    \                  /\    \         
        /::\____\                /::\    \                /::\    \                /::\    \        
       /:::/    /               /::::\    \               \:::\    \              /::::\    \       
      /:::/    /               /::::::\    \               \:::\    \            /::::::\    \      
     /:::/    /               /:::/\:::\    \               \:::\    \          /:::/\:::\    \     
    /:::/____/               /:::/__\:::\    \               \:::\    \        /:::/__\:::\    \    
   /::::\    \              /::::\   \:::\    \               \:::\    \      /::::\   \:::\    \   
  /::::::\____\________    /::::::\   \:::\    \               \:::\    \    /::::::\   \:::\    \  
 /:::/\:::::::::::\    \  /:::/\:::\   \:::\    \               \:::\    \  /:::/\:::\   \:::\    \ 
/:::/  |:::::::::::\____\/:::/  \:::\   \:::\____\_______________\:::\____\/:::/__\:::\   \:::\____\
\::/   |::|~~~|~~~~~     \::/    \:::\  /:::/    /\::::::::::::::::::/    /\:::\   \:::\   \::/    /
 \/____|::|   |           \/____/ \:::\/:::/    /  \::::::::::::::::/____/  \:::\   \:::\   \/____/ 
       |::|   |                    \::::::/    /    \:::\~~~~\~~~~~~         \:::\   \:::\    \     
       |::|   |                     \::::/    /      \:::\    \               \:::\   \:::\____\    
       |::|   |                     /:::/    /        \:::\    \               \:::\   \::/    /    
       |::|   |                    /:::/    /          \:::\    \               \:::\   \/____/     
       |::|   |                   /:::/    /            \:::\    \               \:::\    \         
       \::|   |                  /:::/    /              \:::\____\               \:::\____\        
        \:|   |                  \::/    /                \::/    /                \::/    /        
         \|___|                   \/____/                  \/____/                  \/____/         
see theme at https://github.com/theme-kaze/hexo-theme-kaze
`);
// darkmode.js
// reverse button
const scrollWidth = document.body.scrollWidth || document.documentElement.scrollWidth;
let darkControlButton = null;
if (scrollWidth <= 742) {
  darkControlButton = document.querySelector('.darkwidget');
} else {
  darkControlButton = document.querySelector('.darknavbar');
}

darkControlButton.addEventListener('click', () => {
  setDarkmode(reverseDarkModeSetting());
});
// scroll-up.js
const smoothScrollToTop = () => {
  let yTopValve = (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop);
  if (yTopValve > 1) {
    window.requestAnimationFrame(smoothScrollToTop);
    scrollTo(0, Math.floor(yTopValve * 0.85));
  } else {
    scrollTo(0, 0);
  }
};
setTimeout(() => {
  document.getElementById('scrollbutton').onclick = smoothScrollToTop;
}, 0);
// popbutton.js
const reversePopButton = () => {
  const scrollButton = document.getElementById('scrollbutton');
  const menuButton = document.getElementById('menubutton');
  const reverseButton = document.getElementById('popbutton');
  const scrollWidth = document.body.scrollWidth || document.documentElement.scrollWidth;
  if (scrollButton.style.display === 'flex') {
    scrollButton.style.bottom = '32px';
    scrollButton.style.opacity = '0';
    reverseButton.style.transform = 'none';
    setTimeout(() => {
      scrollButton.style.display = 'none';
    }, 100);
  } else {
    scrollButton.style.display = 'flex';
    reverseButton.style.transform = 'rotate(90deg)';
    setTimeout(() => {
      scrollButton.style.bottom = '85px';
      scrollButton.style.opacity = '1';
    }, 100);
  }
  const mobileToc = document.getElementById('mobiletoc');
  if (scrollWidth <= 862 && mobileToc) {
    if (menuButton.style.display === 'flex') {
      menuButton.style.right = '32px';
      menuButton.style.opacity = '0';
      setTimeout(() => {
        menuButton.style.display = 'none';
      }, 100);
    } else {
      menuButton.style.display = 'flex';
      setTimeout(() => {
        menuButton.style.right = '85px';
        menuButton.style.opacity = '1';
      }, 100);
    }
  }
  const darkButton = document.querySelector('.darkwidget');
  if (scrollWidth <= 742) {
    if (darkButton.style.display === 'flex') {
      darkButton.style.bottom = '32px';
      darkButton.style.opacity = '0';
      darkButton.style.transform = 'none';
      setTimeout(() => {
        darkButton.style.display = 'none';
      }, 100);
    } else {
      darkButton.style.display = 'flex';
      reverseButton.style.transform = 'rotate(90deg)';
      setTimeout(() => {
        darkButton.style.bottom = '138px';
        darkButton.style.opacity = '1';
      }, 100);
    }
  } 
};
setTimeout(() => {
  document.getElementById('popbutton').onclick = reversePopButton;
}, 0);
// menuButton.js
function menuClick(event) {
  const target = event.target;
  const mobileToc = document.getElementById('mobiletoc');
  if (!mobileToc) {
    return;
  }
  if (!mobileToc.contains(target)) {
    mobileToc.style.display = 'none';
    mask.remove();
    document.removeEventListener('click', menuClick);
  }
}
const clickMenuButton = () => {
  const mobileToc = document.getElementById('mobiletoc');
  if (!mobileToc) {
    return;
  }
  mobileToc.style.display = 'block';
  const mask = document.createElement('div');
  mask.id = 'mask';
  document.body.append(mask);
  setTimeout(() => {
    document.addEventListener('click', menuClick);
  }, 0);
};
setTimeout(() => {
  document.getElementById('menubutton').onclick = clickMenuButton;
}, 0);
// search.js
// search button

function searchClick(event) {
  const searchContent = document.querySelector('#local-search');
  if(!searchContent.contains(event.target)) {
    const searchInput = document.querySelector('#search-input');
    const content = document.querySelector('#search-content');
    searchInput.value = '';
    searchContent.style.display = 'none';
    content.innerHTML = '';
    mask.remove();
    document.removeEventListener('click', searchClick);
  }
}

setTimeout(() => {
  document.querySelector('#search').addEventListener('click', () => {
    const mask = document.createElement('div');
    mask.id = 'mask';
    document.body.append(mask);
    const searchMain = document.querySelector('#local-search');
    searchMain.style.display = 'block';
    setTimeout(() => {
      document.addEventListener('click', searchClick);
    }, 0);
  });
});

const localSearch = function (path) {
  fetch(path)
    .then(res => res.json())
    .then(res => {
      let input = document.getElementById('search-input');
      let resultContent = document.getElementById('search-content');
      
      input.addEventListener('input', function () {
        let str = '<ul class="search-result-list">';
        let keyword = this.value.trim().toLowerCase();
        resultContent.innerHTML = '';
        if (this.value.trim().length <= 0) {
          return;
        }
        res.forEach(function (data) {
          let isMatch = true;
          if (!data.title || data.title.trim() === '') {
            data.title = 'Untitled';
          }
          const dataTitle = data.title.trim().toLowerCase();
          const dataContent = data.content.trim().replace(/<[^>]+>/g, '').toLowerCase();
          let firstOccur = -1;
          if (dataContent !== '') {
            const indexTitle = dataTitle.indexOf(keyword);
            const indexContent = dataContent.indexOf(keyword);
            firstOccur = indexContent;
            if (indexTitle < 0 && indexContent < 0) {
              isMatch = false;
            } else if (indexContent < 0) {
              firstOccur = 0;
            }
          } else {
            isMatch = false;
          }
          if (isMatch) {
            str += '<li><a href=\'' + data.url + '\' class=\'search-result-title\'>' + dataTitle + '</a>';
            const content = data.content.trim().replace(/<[^>]+>/g, '');
            if (firstOccur >= 0) {
              const start = Math.max(0, firstOccur - 12);
              const end = Math.min(content.length, firstOccur + 12);
              let matchContent = content.substr(start, end);
              matchContent = matchContent.replace(new RegExp(keyword, 'gi'), '<em class="search-keyword">' + keyword + '</em>');
              str += '<p class="search-result">' + matchContent + '...</p>';
            }
            str += '</li>';
          }
        });
        str += '</ul>';
        if (str.indexOf('<li>') === -1) {
          return resultContent.innerHTML = '<ul><span class="local-search-empty">没有搜索到结果<span></ul>';
        }
        resultContent.innerHTML = str;
      });
    });
};
setTimeout(() => {
  localSearch('/search.json');
}, 0);
