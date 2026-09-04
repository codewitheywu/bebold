// mobile nav toggle
var navToggle = document.querySelector('.nav-toggle');
var mainNav = document.querySelector('.main-nav');
if(navToggle && mainNav){
  navToggle.addEventListener('click', function(){
    var isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// nav active state (lets real in-page anchors jump/scroll normally)
document.querySelectorAll('.main-nav a').forEach(function(link){
  link.addEventListener('click', function(){
    document.querySelectorAll('.main-nav a').forEach(function(a){ a.classList.remove('active'); });
    link.classList.add('active');
    if(mainNav){
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// team filter tabs
var filterTabs = document.querySelectorAll('.filter-tab');
var personCards = document.querySelectorAll('.person-card');
filterTabs.forEach(function(tab){
  tab.addEventListener('click', function(){
    filterTabs.forEach(function(t){ t.classList.remove('active'); });
    tab.classList.add('active');
    var filter = tab.getAttribute('data-filter');
    personCards.forEach(function(card){
      var cats = card.getAttribute('data-category');
      var show = filter === 'all' || cats.indexOf(filter) !== -1;
      card.style.display = show ? '' : 'none';
    });
  });
});

// read more toggle
document.querySelectorAll('.read-more').forEach(function(btn){
  btn.addEventListener('click', function(){
    var extra = btn.parentElement.querySelector('.person-extra');
    var isHidden = extra.hasAttribute('hidden');
    if(isHidden){
      extra.removeAttribute('hidden');
      btn.textContent = 'Show less';
    } else {
      extra.setAttribute('hidden','');
      btn.textContent = 'Read more';
    }
  });
});

// FAQ accordion
var faqItems = document.querySelectorAll('.faq-item');
function closeFaq(item){
  item.classList.remove('open');
  item.querySelector('.faq-answer').style.maxHeight = null;
  item.querySelector('.faq-icon').innerHTML = '&plus;';
}
function openFaq(item){
  item.classList.add('open');
  var answer = item.querySelector('.faq-answer');
  answer.style.maxHeight = answer.scrollHeight + 'px';
  item.querySelector('.faq-icon').innerHTML = '&minus;';
}
faqItems.forEach(function(item){
  item.querySelector('.faq-question').addEventListener('click', function(){
    var wasOpen = item.classList.contains('open');
    faqItems.forEach(closeFaq);
    if(!wasOpen){ openFaq(item); }
  });
});
var initialOpen = document.querySelector('.faq-item.open');
if(initialOpen){ openFaq(initialOpen); }
