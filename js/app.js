// ========== 视频数据 ==========
const videoData = {
  recommend: {
    title: '推荐',
    videos: [
      { title: '对你好不是基本的吗？凭什么他稍微对你好点你就会这么喜欢他', author: '碳基生物', likes: 15200, color: '#1a1a2e', icon: '💬', avatar: '🧑' },
      { title: '今天做了一道超简单的家常菜，全家都抢着吃！', author: '厨房小白', likes: 89200, color: '#2d1b0e', icon: '🍳', avatar: '👩‍🍳' },
      { title: '程序员下班后都在干嘛？真实记录一天', author: '码农日记', likes: 23400, color: '#0d1b2a', icon: '💻', avatar: '👨‍💻' },
      { title: '这只猫太搞笑了哈哈哈笑到肚子疼', author: '铲屎官日记', likes: 98700, color: '#1b2a1b', icon: '🐱', avatar: '😺' },
      { title: '挑战24小时只说方言，朋友全程崩溃', author: '搞笑日常', likes: 45600, color: '#2a1a2e', icon: '😂', avatar: '🤣' },
    ]
  },
  follow: {
    title: '关注',
    videos: [
      { title: '新买的衣服到了！开箱试穿合集', author: '穿搭博主Lily', likes: 34500, color: '#2e1a2e', icon: '👗', avatar: '👧' },
      { title: '周末去了趟西湖，风景太美了', author: '旅行者小陈', likes: 67800, color: '#1a2e2e', icon: '🏔️', avatar: '🧑' },
      { title: '吉他弹唱《晴天》cover', author: '音乐老师阿明', likes: 34200, color: '#1a1a2e', icon: '🎸', avatar: '🎵' },
    ]
  },
  study: {
    title: '学习',
    videos: [
      { title: '高效学习法：番茄钟技巧', author: '学霸小课堂', likes: 12800, color: '#0d1b2a', icon: '📖', avatar: '📚' },
      { title: '英语口语速成秘诀', author: '英语达人Lucy', likes: 8900, color: '#1a237e', icon: '🗣️', avatar: '👩‍🏫' },
      { title: '程序员的一天 Vlog', author: '码农日记', likes: 23400, color: '#006064', icon: '💻', avatar: '👨‍💻' },
      { title: '考研上岸经验分享', author: '考研加油站', likes: 45600, color: '#1b5e20', icon: '🎓', avatar: '🎓' },
    ]
  },
  game: {
    title: '游戏',
    videos: [
      { title: '原神4.8版本全攻略', author: '游戏攻略组', likes: 67800, color: '#b71c1c', icon: '⚔️', avatar: '🎮' },
      { title: '我的世界红石教程', author: 'MC大师兄', likes: 34500, color: '#e65100', icon: '🏗️', avatar: '⛏️' },
      { title: '手游上分技巧合集', author: '电竞小王子', likes: 52100, color: '#4a148c', icon: '🏆', avatar: '🏆' },
      { title: '独立游戏推荐TOP10', author: '游戏杂谈', likes: 18900, color: '#263238', icon: '🕹️', avatar: '🕹️' },
    ]
  },
  food: {
    title: '美食',
    videos: [
      { title: '10分钟快手晚餐', author: '厨房小白', likes: 89200, color: '#bf360c', icon: '🍳', avatar: '👩‍🍳' },
      { title: '网红奶茶在家做', author: '甜品控', likes: 56700, color: '#e65100', icon: '🧋', avatar: '🧋' },
      { title: '减脂餐这样做超好吃', author: '健身美食家', likes: 42300, color: '#33691e', icon: '🥗', avatar: '🥗' },
      { title: '街头小吃探店合集', author: '吃货日记', likes: 97800, color: '#880e4f', icon: '🍢', avatar: '🍜' },
    ]
  },
  fashion: {
    title: '穿搭',
    videos: [
      { title: '秋冬穿搭灵感分享', author: '穿搭博主Lily', likes: 34500, color: '#4e342e', icon: '🧥', avatar: '👧' },
      { title: '小个子显高穿搭技巧', author: '时尚小个子', likes: 67800, color: '#1a237e', icon: '👠', avatar: '👠' },
      { title: '平价好物穿搭挑战', author: '省钱穿搭师', likes: 45200, color: '#880e4f', icon: '🛍️', avatar: '🛍️' },
      { title: '通勤穿搭一周不重样', author: '职场穿搭记', likes: 28900, color: '#004d40', icon: '👔', avatar: '👔' },
    ]
  },
  music: {
    title: '音乐',
    videos: [
      { title: '吉他入门零基础教学', author: '音乐老师阿明', likes: 34200, color: '#e65100', icon: '🎸', avatar: '🎸' },
      { title: '翻唱热门歌曲合集', author: '唱歌的鱼', likes: 78900, color: '#4a148c', icon: '🎤', avatar: '🎤' },
      { title: '钢琴版动漫BGM', author: '琴键上的猫', likes: 56300, color: '#1a237e', icon: '🎹', avatar: '🎹' },
    ]
  },
  dance: {
    title: '舞蹈',
    videos: [
      { title: '零基础爵士舞教学', author: '舞蹈达人CC', likes: 45600, color: '#880e4f', icon: '💃', avatar: '💃' },
      { title: '热门舞蹈翻跳合集', author: '舞动青春', likes: 89200, color: '#b71c1c', icon: '🕺', avatar: '🕺' },
    ]
  },
  anime: {
    title: '动画',
    videos: [
      { title: '本季新番追番指南', author: '番剧推荐官', likes: 98700, color: '#1a237e', icon: '📺', avatar: '📺' },
      { title: '经典动画名场面盘点', author: '二次元老司机', likes: 76500, color: '#b71c1c', icon: '🎬', avatar: '🎬' },
    ]
  },
  tech: {
    title: '科技',
    videos: [
      { title: '最新手机评测对比', author: '科技美学', likes: 87600, color: '#263238', icon: '📱', avatar: '📱' },
      { title: 'AI工具效率翻倍指南', author: '效率工具控', likes: 65400, color: '#4a148c', icon: '🤖', avatar: '🤖' },
    ]
  },
  fitness: {
    title: '健身',
    videos: [
      { title: '居家燃脂30分钟跟练', author: '健身教练Amy', likes: 56700, color: '#b71c1c', icon: '🔥', avatar: '🔥' },
      { title: '新手增肌饮食计划', author: '营养师小张', likes: 43200, color: '#33691e', icon: '🥩', avatar: '🥩' },
    ]
  },
  travel: {
    title: '旅行',
    videos: [
      { title: '云南自驾游全攻略', author: '旅行者小陈', likes: 67800, color: '#1b5e20', icon: '🏔️', avatar: '🏔️' },
      { title: '日本深度游7天行程', author: '环球旅行记', likes: 87600, color: '#b71c1c', icon: '🗼', avatar: '🗼' },
    ]
  },
  knowledge: {
    title: '知识',
    videos: [
      { title: '量子计算通俗讲解', author: '科普大讲堂', likes: 45600, color: '#1a237e', icon: '🔬', avatar: '🔬' },
      { title: '经济学思维入门课', author: '知识加油站', likes: 34500, color: '#e65100', icon: '📊', avatar: '📊' },
    ]
  },
  vlog: {
    title: 'Vlog',
    videos: [
      { title: '大学生的一天记录', author: '校园Vlogger', likes: 56700, color: '#e65100', icon: '📸', avatar: '📸' },
      { title: '独居生活日常分享', author: '一个人的生活', likes: 87600, color: '#4a148c', icon: '☕', avatar: '☕' },
    ]
  },
  ai: {
    title: 'AI',
    videos: [
      { title: 'ChatGPT实用技巧大全', author: 'AI探索者', likes: 98700, color: '#4a148c', icon: '🤖', avatar: '🤖' },
      { title: 'AI绘画入门教程', author: 'AI艺术工坊', likes: 76500, color: '#1a237e', icon: '🎨', avatar: '🎨' },
    ]
  },
  pet: {
    title: '萌宠',
    videos: [
      { title: '猫咪搞笑日常合集', author: '铲屎官日记', likes: 98700, color: '#e65100', icon: '🐱', avatar: '🐱' },
      { title: '狗狗训练从零开始', author: '训犬师小王', likes: 54300, color: '#33691e', icon: '🐕', avatar: '🐕' },
    ]
  },
  film: {
    title: '影视',
    videos: [
      { title: '本周院线新片速览', author: '影视风向标', likes: 76500, color: '#263238', icon: '🎬', avatar: '🎬' },
      { title: '经典电影深度解读', author: '影评人老张', likes: 54300, color: '#b71c1c', icon: '🎥', avatar: '🎥' },
    ]
  },
  life: {
    title: '生活',
    videos: [
      { title: '收纳整理全屋改造', author: '整理收纳师', likes: 56700, color: '#00897b', icon: '📦', avatar: '📦' },
      { title: '省钱生活小妙招', author: '生活达人', likes: 87600, color: '#e65100', icon: '💡', avatar: '💡' },
    ]
  },
};

const companionMessages = [
  "这个视频好有趣！👍",
  "你最近看了好多美食视频呀~",
  "休息一下眼睛吧 👀",
  "双击屏幕可以点赞哦",
  "要不要试试穿搭区？",
  "我陪你一起看~ 🐱",
  "刷了这么久，喝口水吧",
  "今天也要元气满满哦！",
  "学到新东西了吗？✨",
  "这个博主好有趣哈哈~",
  "双击我可以打开分区哦~",
  "我发现了一个宝藏视频！",
];

// ========== 状态 ==========
let videoCount = 0;
let currentCategory = 'recommend';
let currentSlide = 0;
let isMenuOpen = false;
let isPetHidden = false;
let isDragging = false;
let didDrag = false;
let dragStartX = 0, dragStartY = 0;
let petStartX = 0, petStartY = 0;
let lastInteraction = Date.now();
let isSleeping = false;
let isTalking = false;
let companionTimer = null;
let bubbleHideTimer = null;
let touchStartY = 0;
let touchDeltaY = 0;
let isSwiping = false;
let lastTapTime = 0;
let lastPetTapTime = 0;

// 观看次数统计
let categoryViewCount = {
  study: 0, game: 0, food: 0, fashion: 0,
  music: 0, dance: 0, anime: 0, tech: 0,
  fitness: 0, travel: 0, knowledge: 0, vlog: 0,
  ai: 0, pet: 0, film: 0, life: 0
};

// ========== 初始化 ==========
function init() {
  loadViewCount();
  setGreeting();
  initPetPosition();
  initPetDrag();
  initPetLongPress();
  initPetClick();
  initVideoFeedTouch();
  loadCategory('recommend');
  updateMenuItems();
  startCompanionTimer();
  startSleepCheck();
  startRandomActions();
}

// ========== 本地存储 ==========
function saveViewCount() {
  localStorage.setItem('petCategoryViewCount', JSON.stringify(categoryViewCount));
}

function loadViewCount() {
  const saved = localStorage.getItem('petCategoryViewCount');
  if (saved) {
    categoryViewCount = JSON.parse(saved);
  }
}

// ========== 问候语 ==========
function setGreeting() {
  const hour = new Date().getHours();
  let greeting;
  if (hour >= 6 && hour < 12) greeting = '☀️ 早上好呀~';
  else if (hour >= 12 && hour < 18) greeting = '🌤️ 下午好~';
  else if (hour >= 18 && hour < 24) greeting = '🌙 晚上好~';
  else greeting = '🦉 注意休息哦~';
  setTimeout(() => showBubble(greeting, 4000), 800);
}

// ========== 顶部标签切换 ==========
function switchTab(el) {
  const cat = el.dataset.cat;
  if (!videoData[cat]) return;
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  loadCategory(cat);
  recordInteraction();
}

function loadCategory(category) {
  currentCategory = category;
  currentSlide = 0;
  const slider = document.getElementById('video-slider');
  const data = videoData[category];
  if (!data) return;

  slider.innerHTML = '';
  slider.style.transform = 'translateY(0)';

  data.videos.forEach((video, idx) => {
    const slide = document.createElement('div');
    slide.className = 'video-slide';
    slide.dataset.index = idx;
    slide.innerHTML = `
      <div class="video-placeholder" style="background: linear-gradient(135deg, ${video.color}, ${adjustColor(video.color, 25)});">
        <div class="placeholder-icon">${video.icon}</div>
        <div class="placeholder-text">${video.title}</div>
      </div>
      <div class="video-actions">
        <div class="video-action-avatar">
          <div class="avatar-bg" style="background:linear-gradient(135deg,#42a5f5,#1e88e5);">${video.avatar}</div>
          <div class="avatar-follow">+</div>
        </div>
        <div class="video-action-btn" data-idx="${idx}">
          <span class="action-icon">❤️</span>
          <span class="action-count like-count">${formatLikes(video.likes)}</span>
        </div>
        <div class="video-action-btn">
          <span class="action-icon">💬</span>
          <span class="action-count">${Math.floor(video.likes * 0.015)}</span>
        </div>
        <div class="video-action-btn">
          <span class="action-icon">⭐</span>
          <span class="action-count">${Math.floor(video.likes * 0.04)}</span>
        </div>
        <div class="video-action-btn">
          <span class="action-icon">↗️</span>
          <span class="action-count">${formatLikes(Math.floor(video.likes * 0.25))}</span>
        </div>
      </div>
      <div class="video-info">
        <div class="video-author">@${video.author}</div>
        <div class="video-desc">${video.title}</div>
      </div>
      <div class="video-pause-icon">▶️</div>
    `;
    slider.appendChild(slide);
  });
}

function selectCategory(category) {
  closeCircleMenu();
  closeCategoryPage();
  // 记录观看
  categoryViewCount[category] = (categoryViewCount[category] || 0) + 1;
  saveViewCount();
  updateMenuItems();
  // 同步顶部标签
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === category);
  });
  loadCategory(category);
}

// ========== 更新菜单项（最常观看的分区） ==========
function updateMenuItems() {
  const sorted = Object.entries(categoryViewCount)
    .filter(([cat, count]) => count > 0 && videoData[cat])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  const menuItems = document.querySelectorAll('#circle-menu .menu-item');
  const defaultCats = ['study', 'game', 'food', 'fashion'];

  menuItems.forEach((item, i) => {
    const cat = sorted[i] ? sorted[i][0] : defaultCats[i];
    const data = videoData[cat];
    if (data) {
      item.dataset.category = cat;
      item.querySelector('.menu-icon').textContent = data.videos[0]?.icon || '📁';
      item.querySelector('span:last-child').textContent = data.title;
      item.onclick = () => selectCategory(cat);
    }
  });
}

// ========== 全屏分区页面 ==========
function openCategoryPage() {
  document.getElementById('category-page').classList.add('show');
}

function closeCategoryPage() {
  document.getElementById('category-page').classList.remove('show');
}

// ========== 悬浮窗宠物位置 ==========
function initPetPosition() {
  const fab = document.getElementById('pet-fab');
  const w = window.innerWidth;
  const h = window.innerHeight;
  fab.style.left = (w - 64 - 8) + 'px';
  fab.style.top = (h - 64 - 80) + 'px';
}

// ========== 悬浮窗拖拽 ==========
function initPetDrag() {
  const fab = document.getElementById('pet-fab');
  fab.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    didDrag = false;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    petStartX = parseInt(fab.style.left) || 0;
    petStartY = parseInt(fab.style.top) || 0;
    fab.setPointerCapture(e.pointerId);
    recordInteraction();
  });
  fab.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) didDrag = true;
    if (didDrag) {
      let newX = petStartX + dx;
      let newY = petStartY + dy;
      newX = Math.max(0, Math.min(window.innerWidth - 64, newX));
      newY = Math.max(40, Math.min(window.innerHeight - 64 - 60, newY));
      fab.style.left = newX + 'px';
      fab.style.top = newY + 'px';
      if (isMenuOpen) closeCircleMenu();
    }
  });
  fab.addEventListener('pointerup', () => {
    if (isDragging && didDrag) {
      const finalX = parseInt(fab.style.left) || 0;
      checkEdgeSnap(finalX);
    }
    isDragging = false;
  });
}

// ========== 宠物点击（单击开菜单，双击开分区页） ==========
function initPetClick() {
  const fab = document.getElementById('pet-fab');
  fab.addEventListener('click', (e) => {
    if (snapSide) { unsnapPet(); return; }
    if (didDrag) return;
    const now = Date.now();
    if (now - lastPetTapTime < 350) {
      // 双击 → 打开分区页面
      closeCircleMenu();
      openCategoryPage();
      lastPetTapTime = 0;
    } else {
      // 单击 → 开关菜单
      lastPetTapTime = now;
      setTimeout(() => {
        if (lastPetTapTime !== 0 && Date.now() - lastPetTapTime >= 320) {
          if (isMenuOpen) closeCircleMenu();
          else openCircleMenu();
          lastPetTapTime = 0;
        }
      }, 330);
    }
    recordInteraction();
  });
}

// ========== 侧边框吸附隐藏 ==========
let snapSide = null; // 'left' | 'right' | null
let preSnapX = 0, preSnapY = 0;

function checkEdgeSnap(finalX) {
  const fab = document.getElementById('pet-fab');
  const w = window.innerWidth;
  const snapThreshold = 30; // 距离边缘30px以内触发吸附

  if (finalX < snapThreshold) {
    // 吸附到左边
    snapSide = 'left';
    preSnapX = parseInt(fab.style.left);
    preSnapY = parseInt(fab.style.top);
    fab.style.left = '0px';
    fab.classList.add('snapped-left');
    fab.classList.remove('snapped-right');
    isPetHidden = true;
    closeCircleMenu();
  } else if (finalX > w - 64 - snapThreshold) {
    // 吸附到右边
    snapSide = 'right';
    preSnapX = parseInt(fab.style.left);
    preSnapY = parseInt(fab.style.top);
    fab.style.left = (w - 64) + 'px';
    fab.classList.add('snapped-right');
    fab.classList.remove('snapped-left');
    isPetHidden = true;
    closeCircleMenu();
  }
}

function unsnapPet() {
  if (!snapSide) return;
  const fab = document.getElementById('pet-fab');
  fab.classList.remove('snapped-left', 'snapped-right');
  fab.style.left = preSnapX + 'px';
  fab.style.top = preSnapY + 'px';
  snapSide = null;
  isPetHidden = false;
  recordInteraction();
}

// ========== 圆形菜单 ==========
function openCircleMenu() {
  isMenuOpen = true;
  const menu = document.getElementById('circle-menu');
  const fab = document.getElementById('pet-fab');
  const fabRect = fab.getBoundingClientRect();
  const fabCX = fabRect.left + fabRect.width / 2;
  const fabCY = fabRect.top + fabRect.height / 2;
  const radius = 75;
  const items = menu.querySelectorAll('.menu-item');
  const startAngle = -Math.PI / 2;
  const count = items.length;

  menu.style.left = fabCX + 'px';
  menu.style.top = fabCY + 'px';

  items.forEach((item, i) => {
    const angle = startAngle + (i * Math.PI * 2 / count);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    item.style.left = (x - 31) + 'px';
    item.style.top = (y - 31) + 'px';
    item.style.transitionDelay = (i * 0.04) + 's';
  });
  menu.classList.add('show');
}

function closeCircleMenu() {
  isMenuOpen = false;
  const menu = document.getElementById('circle-menu');
  menu.querySelectorAll('.menu-item').forEach(item => item.style.transitionDelay = '0s');
  menu.classList.remove('show');
}

// ========== 视频滑动 ==========
function initVideoFeedTouch() {
  const feed = document.getElementById('video-feed');
  const slider = document.getElementById('video-slider');

  feed.addEventListener('pointerdown', (e) => {
    if (e.target.closest('#pet-fab') || e.target.closest('#circle-menu') || e.target.closest('#ai-chat-panel') || e.target.closest('.video-action-btn') || e.target.closest('#top-nav') || e.target.closest('#bottom-nav')) return;
    touchStartY = e.clientY;
    touchDeltaY = 0;
    isSwiping = false;
    feed.setPointerCapture(e.pointerId);
  });
  feed.addEventListener('pointermove', (e) => {
    if (touchStartY === 0) return;
    touchDeltaY = e.clientY - touchStartY;
    if (Math.abs(touchDeltaY) > 10) {
      isSwiping = true;
      const offset = currentSlide * window.innerHeight;
      slider.style.transition = 'none';
      slider.style.transform = `translateY(${-offset + touchDeltaY}px)`;
    }
  });
  feed.addEventListener('pointerup', (e) => {
    if (touchStartY === 0) return;
    const wasSwiping = isSwiping;
    const deltaY = touchDeltaY;
    touchStartY = 0; touchDeltaY = 0; isSwiping = false;

    if (!wasSwiping) { handleVideoTap(e); return; }

    const threshold = window.innerHeight * 0.15;
    const data = videoData[currentCategory];
    const maxSlide = data.videos.length - 1;

    if (deltaY < -threshold && currentSlide < maxSlide) {
      currentSlide++;
      videoCount++;
      updateVideoCount();
      recordInteraction();
    } else if (deltaY > threshold && currentSlide > 0) {
      currentSlide--;
      recordInteraction();
    }
    slider.style.transition = 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    slider.style.transform = `translateY(${-currentSlide * window.innerHeight}px)`;
  });

  feed.addEventListener('wheel', (e) => {
    e.preventDefault();
    const data = videoData[currentCategory];
    if (!data) return;
    const maxSlide = data.videos.length - 1;
    if (e.deltaY > 30 && currentSlide < maxSlide) {
      currentSlide++; videoCount++; updateVideoCount(); recordInteraction();
    } else if (e.deltaY < -30 && currentSlide > 0) {
      currentSlide--; recordInteraction();
    }
    slider.style.transition = 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    slider.style.transform = `translateY(${-currentSlide * window.innerHeight}px)`;
  }, { passive: false });
}

// ========== 视频点击/双击 ==========
function handleVideoTap(e) {
  const now = Date.now();
  const slide = e.target.closest('.video-slide');
  if (!slide) return;

  if (now - lastTapTime < 300) {
    createHeartAnimation(e.clientX, e.clientY);
    const likeBtn = slide.querySelector('.like-count');
    const actionBtn = slide.querySelector('.video-action-btn');
    const idx = parseInt(actionBtn.dataset.idx);
    if (!isNaN(idx)) {
      videoData[currentCategory].videos[idx].likes++;
      likeBtn.textContent = formatLikes(videoData[currentCategory].videos[idx].likes);
    }
    lastTapTime = 0;
  } else {
    lastTapTime = now;
    setTimeout(() => {
      if (lastTapTime !== 0 && Date.now() - lastTapTime >= 280) {
        const pauseIcon = slide.querySelector('.video-pause-icon');
        pauseIcon.classList.toggle('show');
        setTimeout(() => pauseIcon.classList.remove('show'), 1200);
        lastTapTime = 0;
      }
    }, 300);
  }
  recordInteraction();
}

function createHeartAnimation(x, y) {
  const hearts = ['❤️', '💖', '💗', '💕', '🩷'];
  for (let i = 0; i < 3; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = (x + (Math.random() - 0.5) * 60) + 'px';
    heart.style.top = (y + (Math.random() - 0.5) * 30) + 'px';
    heart.style.animationDelay = (i * 0.12) + 's';
    document.getElementById('video-feed').appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}

function updateVideoCount() {
  document.getElementById('video-count').textContent = videoCount;
}

function adjustColor(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, (num >> 16) + amount);
  const g = Math.min(255, ((num >> 8) & 0x00FF) + amount);
  const b = Math.min(255, (num & 0x0000FF) + amount);
  return `rgb(${r},${g},${b})`;
}

function formatLikes(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + 'w';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

// ========== 气泡 ==========
function showBubble(text, duration) {
  const bubble = document.getElementById('speech-bubble');
  bubble.textContent = text;
  bubble.classList.add('show');
  setCatTalking(true);
  if (bubbleHideTimer) clearTimeout(bubbleHideTimer);
  bubbleHideTimer = setTimeout(() => {
    bubble.classList.remove('show');
    setCatTalking(false);
  }, duration || 3500);
}

function setCatTalking(talking) {
  isTalking = talking;
  const eyes = document.querySelectorAll('.cat-eye');
  const mouth = document.getElementById('cat-mouth');
  if (talking) {
    eyes.forEach(e => e.classList.add('cat-eye-happy'));
    mouth.querySelector('path').classList.add('cat-mouth-talking');
  } else {
    eyes.forEach(e => e.classList.remove('cat-eye-happy'));
    mouth.querySelector('path').classList.remove('cat-mouth-talking');
  }
}

// ========== 陪伴语 ==========
function startCompanionTimer() {
  companionTimer = setInterval(() => {
    if (isSleeping || isPetHidden) return;
    const msg = companionMessages[Math.floor(Math.random() * companionMessages.length)];
    showBubble(msg, 4000);
  }, 90000);
}

// ========== 睡眠检测 ==========
function startSleepCheck() {
  setInterval(() => {
    const idle = Date.now() - lastInteraction;
    if (idle > 15 * 60 * 1000 && !isSleeping) setSleeping(true);
    else if (idle < 15 * 60 * 1000 && isSleeping) setSleeping(false);
  }, 5000);
}

// ========== 随机动作系统 ==========
let currentAction = null;
let actionTimer = null;

function startRandomActions() {
  actionTimer = setInterval(() => {
    if (isSleeping || isPetHidden || isTalking) return;
    triggerRandomAction();
  }, 25000); // 每25秒随机触发一个动作
}

function triggerRandomAction() {
  const actions = ['stretch', 'play', 'drink', 'peek', 'yawn'];
  const action = actions[Math.floor(Math.random() * actions.length)];
  playCatAction(action);
}

function playCatAction(action) {
  const svg = document.getElementById('cat-svg');
  if (!svg) return;
  
  // 清除之前的动作
  svg.classList.remove('cat-stretching', 'cat-playing', 'cat-drinking', 'cat-peeking', 'cat-yawning');
  
  // 触发新动作
  const actionMap = {
    stretch: 'cat-stretching',
    play: 'cat-playing',
    drink: 'cat-drinking',
    peek: 'cat-peeking',
    yawn: 'cat-yawning',
  };
  
  svg.classList.add(actionMap[action]);
  currentAction = action;
  
  // 动作结束后移除class
  const durations = { stretch: 1500, play: 2400, drink: 2400, peek: 2000, yawn: 1500 };
  setTimeout(() => {
    svg.classList.remove(actionMap[action]);
    currentAction = null;
  }, durations[action]);
}

function setSleeping(sleeping) {
  isSleeping = sleeping;
  const svg = document.getElementById('cat-svg');
  const zzzElements = document.querySelectorAll('.sleep-zzz');
  const eyes = document.querySelectorAll('.cat-eye');
  if (sleeping) {
    zzzElements.forEach(z => z.classList.add('active'));
    eyes.forEach(e => { e.style.transform = 'scaleY(0.1)'; e.style.animation = 'none'; });
    if (svg) svg.classList.add('cat-sleeping-anim');
  } else {
    zzzElements.forEach(z => z.classList.remove('active'));
    eyes.forEach(e => { e.style.transform = ''; e.style.animation = ''; });
    if (svg) svg.classList.remove('cat-sleeping-anim');
  }
}

// ========== AI对话助手 ==========
let aiChatOpen = false;
let petLongPressTimer = null;

const aiResponses = [
  "喵~有什么可以帮你的吗？🐱",
  "我在呢，说说看~",
  "嗯嗯，我听着呢！",
  "这个问题好有趣喵~让我想想...",
  "我觉得你可以试试看！💪",
  "今天心情怎么样呀？",
  "要不要休息一下，看个视频放松下？",
  "你最近在学什么新东西吗？",
  "喵呜~我陪你聊天很开心！",
  "有什么烦恼的话，可以跟我说哦~",
  "要不要我给你推荐个好看的视频？",
  "你今天已经看了好多视频了，眼睛休息一下吧~",
  "我虽然是一只小猫，但我会认真听你说话的！",
  "加油哦！我相信你可以的！✨",
  "要不要去穿搭区看看？换换心情~",
];

function initPetLongPress() {
  const fab = document.getElementById('pet-fab');
  fab.addEventListener('pointerdown', (e) => {
    if (snapSide) return;
    petLongPressTimer = setTimeout(() => {
      petLongPressTimer = null;
      openAiChat();
    }, 600);
  });
  fab.addEventListener('pointermove', () => {
    if (petLongPressTimer) { clearTimeout(petLongPressTimer); petLongPressTimer = null; }
  });
  fab.addEventListener('pointerup', () => {
    if (petLongPressTimer) { clearTimeout(petLongPressTimer); petLongPressTimer = null; }
  });
}

function openAiChat() {
  aiChatOpen = true;
  closeCircleMenu();
  const panel = document.getElementById('ai-chat-panel');
  panel.classList.add('show');
  const msgs = document.getElementById('ai-messages');
  if (msgs.children.length === 0) {
    addAiMessage('cat', '喵~你好呀！我是你的小猫助手 🐱\n有什么想聊的都可以跟我说哦~');
  }
  setTimeout(() => document.getElementById('ai-input').focus(), 400);
  recordInteraction();
}

function closeAiChat() {
  aiChatOpen = false;
  document.getElementById('ai-chat-panel').classList.remove('show');
}

function addAiMessage(type, text) {
  const msgs = document.getElementById('ai-messages');
  const div = document.createElement('div');
  div.className = 'ai-msg ' + type;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function sendAiMessage() {
  const input = document.getElementById('ai-input');
  const text = input.value.trim();
  if (!text) return;

  addAiMessage('user', text);
  input.value = '';

  // 显示"正在输入"
  const msgs = document.getElementById('ai-messages');
  const typing = document.createElement('div');
  typing.className = 'ai-msg-typing';
  typing.textContent = '小猫正在输入...';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;

  const sendBtn = document.getElementById('ai-send-btn');
  sendBtn.disabled = true;

  // 模拟AI回复
  setTimeout(() => {
    typing.remove();
    const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    addAiMessage('cat', response);
    sendBtn.disabled = false;
    input.focus();
  }, 800 + Math.random() * 1200);

  recordInteraction();
}

function recordInteraction() { lastInteraction = Date.now(); }

document.addEventListener('mousemove', recordInteraction);
document.addEventListener('touchstart', recordInteraction);
document.addEventListener('keydown', recordInteraction);
document.addEventListener('click', recordInteraction);

window.addEventListener('resize', () => {
  const fab = document.getElementById('pet-fab');
  const x = parseInt(fab.style.left) || 0;
  const y = parseInt(fab.style.top) || 0;
  fab.style.left = Math.min(x, window.innerWidth - 64) + 'px';
  fab.style.top = Math.min(y, window.innerHeight - 64 - 60) + 'px';
});

window.addEventListener('DOMContentLoaded', init);
