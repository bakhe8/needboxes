// ===== Helpers =====
const $ = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));
// Format number to SAR currency
const SAR = v => new Intl.NumberFormat('ar-SA',{style:'currency',currency:'SAR', minimumFractionDigits: 0, maximumFractionDigits: 0}).format(v);

// ===== State =====
let CART = [];
let currentCat = 'all';

// ===== Product Data (merged from all files) =====
const PRODUCTS = [
    {
        id:'p1',
        name:'مايكروفون استوديو احترافي',
        cat:'audio',
        price:499,
        old:599,
        rating:5,
        pop: 95,
        date: '2025-10-01',
        img:'https://cdn.salla.sa/mQbARj/HUKUwBOlCCAEPURLdgbYLUEwM8u0dR9vinh2Xowv.jpg',
        featured:true,
        stock:true,
        desc:'مايكروفون هجين XLR/USB بهيكل معدني، يوفر وضوحًا بجودة الاستوديو لتسجيلاتك.',
        specs:'نمط الالتقاط: كارديويد\nواجهة: USB/XLR\nهيكل معدني بالكامل',
        shipping:'يشحن خلال 48 ساعة داخل المملكة.',
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        userImages: ["https://placehold.co/100x100/ccc/333?text=User1", "https://placehold.co/100x100/ccc/333?text=User2"]
    },
    {
        id:'p2',
        name:'سماعة M90 Pro اللاسلكية',
        cat:'audio',
        price:40,
        old:75,
        rating:4.7,
        pop: 98,
        date: '2025-09-15',
        img:'https://cdn.salla.sa/mQbARj/2w1sSRRfycRdql1J5TMiIlC1EiOaFAGM8dkCu4yT.jpg',
        featured:true,
        stock:true,
        desc:'بلوتوث 5.3، بطارية 30 ساعة، وسائد أذن مريحة للاستخدام اليومي.',
        specs:'بلوتوث 5.3\nعمر بطارية 30 ساعة\nشاشة LED لمعرفة الشحن',
        shipping:'توصيل سريع مع إمكانية الاسترجاع خلال 7 أيام.',
        video: null,
        userImages: ["https://placehold.co/100x100/ccc/333?text=User3"]
    },
    {
        id:'p3',
        name:'إضاءة حلقة LED 18 بوصة',
        cat:'lighting',
        price:199,
        old:249,
        rating:4.5,
        pop: 88,
        date: '2025-08-20',
        img:'https://cdn.salla.sa/mQbARj/fk0NPtu5Z6btX8EwRoM0roGkv2gS0Hs0QcuFtUza.jpg',
        featured:false,
        stock:true,
        desc:'درجة حرارة لون قابلة للتعديل، حامل متين، مثالية للتصوير والبث المباشر.',
        specs:'18 بوصة\nتحكم بدرجة اللون\nحامل ثلاثي متضمن',
        shipping:'يشحن خلال 48 ساعة.',
        video: null,
        userImages: []
    },
    {
        id:'p4',
        name:'شاحن 65 واط GaN',
        cat:'charging',
        price:149,
        old:null,
        rating:5,
        pop: 92,
        date: '2025-10-05',
        img:'https://cdn.salla.sa/mQbARj/products/Jie3nJEgFyejMA6aw02lgKxWLbNcLnClGBSfWOTt.jpg',
        featured:true,
        stock:true,
        desc:'شحن سريع USB-C PD لأجهزة اللابتوب، التابلت، والهواتف.',
        specs:'قدرة 65W\nتقنية GaN\n3 منافذ (2 USB-C, 1 USB-A)',
        shipping:'توصيل خلال 48–72 ساعة.',
        video: null,
        userImages: ["https://placehold.co/100x100/ccc/333?text=User4"]
    },
    {
        id:'p5',
        name:'منظم كابلات مكتبي',
        cat:'accessory',
        price:39,
        old:null,
        rating:4.2,
        pop: 70,
        date: '2025-07-10',
        img:'https://cdn.salla.sa/mQbARj/ljwqCC4leNFTRQiW4pngTvfDqhqNL5oFi5M1WdzN.jpg',
        featured:false,
        stock:true,
        desc:'حافظ على مساحة عملك نظيفة وخالية من تشابك الكابلات.',
        specs:'مواد مطاطية عالية الجودة\nلاصق 3M قوي',
        shipping:'يشحن مع الطلب.',
        video: null,
        userImages: []
    },
    {
        id:'p6',
        name:'موزع USB-C 7 في 1',
        cat:'accessory',
        price:229,
        old:279,
        rating:4.8,
        pop: 85,
        date: '2025-09-01',
        img:'https://cdn.salla.sa/mQbARj/7qMwE9dY3fklDvQzEZmbTnHssdB1TL9KO7bQOd8R.png',
        featured:true,
        stock:true,
        desc:'HDMI 4K، قارئ بطاقات SD/TF، منفذين USB-A، ومنفذ شحن USB-C PD — هيكل معدني مدمج.',
        specs:'HDMI 4K @ 30Hz\nقارئ بطاقات SD/TF\nUSB-C PD 100W',
        shipping:'يشحن خلال 48 ساعة.',
        video: null,
        userImages: ["https://placehold.co/100x100/ccc/333?text=User5", "https://placehold.co/100x100/ccc/333?text=User6"]
    },
    {
        id:'p7',
        name:'مصباح LED صغير',
        cat:'lighting',
        price:119,
        old:null,
        rating:4.1,
        pop: 60,
        date: '2025-06-15',
        img:'https://cdn.salla.sa/mQbARj/NT8o24OnosrROMJy00C4t70j71MfWCjenltrPNi0.jpg',
        featured:false,
        stock:false,
        desc:'حجم الجيب، شحن USB-C، سطوع قابل للتعديل.',
        specs:'محمول\nUSB-C\nسطوع 500 لومن',
        shipping:'قد يتأخر الشحن عند نفاد المخزون.',
        video: null,
        userImages: []
    },
    {
        id:'p8',
        name:'ذراع مايكروفون استوديو',
        cat:'accessory',
        price:89,
        old:119,
        rating:4.3,
        pop: 75,
        date: '2025-08-01',
        img:'https://cdn.salla.sa/mQbARj/72TtGQyBMvBC7H9FDnZMHMNz4YrcFAM87I38rhGC.jpg',
        featured:false,
        stock:true,
        desc:'نوابض صامتة، مشبك تثبيت قوي، مثالي للمايكروفونات والكاميرات.',
        specs:'ذراع قابل للتعديل\nقاعدة تثبيت قوية\nإدارة للكابلات مدمجة',
        shipping:'يشحن خلال 48 ساعة.',
        video: null,
        userImages: []
    }
];

// Data for Offers Swiper
const OFFERS = [
    { title: 'خصم 30% على الإكسسوارات', badge:'عرض اليوم', image:'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop' },
    { title: 'حزمة تصوير للمبتدئين', badge:'باقة', image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2070&auto=format&fit=crop' },
    { title: 'شواحن GaN فائقة السرعة', badge:'جديد', image:'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=2070&auto=format&fit=crop' }
];

// === UI Builders ===

// Generates star rating HTML
function star(n){let o=''; for(let i=1;i<=5;i++){o += `<i class="fa-${i<=n?'solid':'regular'} fa-star text-sm"></i>`} return `<div class="text-amber-400" aria-label="Rating ${n} out of 5">${o}</div>`};

// Generates HTML for a single product card - UPDATED
function productCard(p){
    const old = p.old? `<span class="line-through text-gray-500 mr-2">${SAR(p.old)}</span>`:'';
    const stockBadge = p.stock? '' : `<span class="out-of-stock-badge">غير متوفر</span>`;
    return `<li class="salla-product-card group ${p.stock?'':'out-of-stock'}" data-aos="fade-up">
        <div class="salla-product-image relative">
            <img src="${p.img}" alt="${p.name}" class="w-full h-[250px] object-cover" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='https://placehold.co/400x250/0D2C6C/ffffff?text=Product';"/>
            ${stockBadge}
            <span class="salla-product-badge absolute top-3 left-3 text-xs font-extrabold px-2 py-1 rounded-lg">${p.featured?'مميز':'جديد'}</span>
        </div>
        <div class="p-4 space-y-3">
            <h3 class="font-bold line-clamp-2 h-12">${p.name}</h3>
            ${star(p.rating||4)}
            <div class="flex items-baseline gap-2"><span class="text-[var(--primary-dark)] dark:text-white font-extrabold text-lg">${SAR(p.price)}</span>${old}</div>
            <!-- Action buttons - always visible -->
            <div class="flex items-center gap-2">
                <button class="salla-add-to-cart flex-1 py-2 rounded-xl text-white text-center transition-all duration-300" data-add="${p.id}" ${p.stock?'':'disabled'} aria-label="Add ${p.name} to cart" style="min-height: 48px;">
                    <i class="fa-solid fa-cart-plus ml-1"></i> أضف إلى السلة
                </button>
                <button class="w-10 h-10 rounded-xl border dark:border-white/10 dark:bg-gray-700 flex items-center justify-center transition-colors duration-200 hover:border-[var(--accent-coral)] hover:text-[var(--accent-coral)]" aria-label="Add ${p.name} to wishlist" style="min-width: 48px; min-height: 48px;">
                    <i class="fa-regular fa-heart"></i>
                </button>
                <button class="w-10 h-10 rounded-xl border dark:border-white/10 dark:bg-gray-700 flex items-center justify-center transition-colors duration-200 hover:border-[var(--accent-coral)] hover:text-[var(--accent-coral)]" data-qv="${p.id}" aria-label="Quick view ${p.name}" style="min-width: 48px; min-height: 48px;">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
    </li>`;
};

// Renders featured products
function renderFeatured(){
    const grid=$('#featured-grid');
    if(!grid) return;
    grid.innerHTML = PRODUCTS.filter(p=>p.featured).slice(0,8).map(productCard).join('');
};

// Creates a skeleton card
function createSkeleton(){ return `<li class="skeleton h-[420px] rounded-2xl"></li>`; };

// Renders all products (with skeletons first)
function renderAll(){
    const grid=$('#all-products-list');
    if(!grid) return;
    grid.innerHTML=Array(8).fill(0).map(createSkeleton).join('');
    grid.setAttribute('aria-busy','true');
    setTimeout(()=>{ applyFiltersAndSort(); }, 350);
};

// Applies filters and sorting to the main product grid
function applyFiltersAndSort(){
    const grid=$('#all-products-list'); if(!grid) return;

    const min=parseFloat($('#priceMin')?.value||'0');
    let max=parseFloat($('#priceMax')?.value||'999999');
    if (isNaN(max)) max = 999999;

    let list = PRODUCTS.filter(p=> (currentCat==='all'||p.cat===currentCat) && p.price>=min && p.price<=max);

    const sort=$('#sortSelect')?.value;
    if(sort==='priceAsc') list.sort((a,b)=>a.price-b.price);
    if(sort==='priceDesc') list.sort((a,b)=>b.price-a.price);
    if(sort==='rating') list.sort((a,b)=> (b.rating||0)-(a.rating||0));
    if(sort==='new') list.sort((a,b)=> new Date(b.date) - new Date(a.date));
    if(sort==='pop') list.sort((a,b)=> (b.pop||0)-(a.pop||0));

    grid.innerHTML = list.length ? list.map(productCard).join('') : `<p class="col-span-full text-center text-gray-500">لا توجد منتجات تطابق بحثك.</p>`;
    grid.removeAttribute('aria-busy');
    attachCardListeners(); // Re-attach listeners to new cards
};

// Renders the offers swiper
function renderOffers(){
    const wrap=$('#offers-wrapper');
    if(!wrap) return;
    wrap.innerHTML = OFFERS.map(o=>`<div class="swiper-slide">
        <article class="rounded-2xl overflow-hidden border dark:border-white/10 bg-white dark:bg-gray-800 transform transition-transform hover:scale-[1.02] shadow-soft hover:shadow-nb">
            <div class="relative">
                <img src="${o.image}" alt="${o.title}" class="w-full h-52 object-cover" loading="lazy" decoding="async"/>
                <span class="absolute top-3 left-3 bg-gradient-to-r from-[var(--accent-coral)] to-[var(--accent-orange-dark)] text-white text-xs font-extrabold px-2 py-1 rounded-lg">${o.badge}</span>
            </div>
            <div class="p-4"><h3 class="font-extrabold">${o.title}</h3></div>
        </article></div>`).join('');
};

// ===== Cart & Modal Logic =====

// Updates the mini-cart UI
function updateMiniCart(){
    const body=$('#mini-cart-body');
    const totalEl=$('#mini-cart-total');
    const empty=$('#mini-cart-empty');
    const cartCountBadge = $('#cartCount');

    if(!CART.length){
        body.innerHTML = `<p id="mini-cart-empty" class="text-gray-500 text-center py-10">سلتك فارغة حالياً.</p>`;
        totalEl.textContent=SAR(0);
        cartCountBadge.textContent = '0';
        return;
    }

    empty?.remove();
    let sum=0;
    let totalItems = 0;
    body.innerHTML = CART.map(it=>{
        sum += it.price*it.qty;
        totalItems += it.qty;
        return `<div class="flex items-center justify-between gap-3 py-2 border-b dark:border-white/10">
            <div class="flex items-center gap-3"><img src="${it.img}" class="w-12 h-12 object-cover rounded-lg" alt="${it.name}"/>
            <div><div class="font-bold text-sm">${it.name}</div><div class="text-xs">${SAR(it.price)} × ${it.qty}</div></div></div>
            <button class="text-red-500" data-del="${it.id}" aria-label="Remove ${it.name}"><i class="fas fa-trash"></i></button>
        </div>`
    }).join('');

    totalEl.textContent = SAR(sum);
    cartCountBadge.textContent = totalItems;

    // Re-attach delete listeners
    $$('[data-del]', body).forEach(b=> b.addEventListener('click', e=>{
        const id=e.currentTarget.getAttribute('data-del');
        CART = CART.filter(x=>x.id!==id);
        updateMiniCart();
    }));
};

// Adds a product to the cart by ID
function addToCartById(id){
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p || !p.stock) {
        showToast('المنتج غير متوفر حالياً', true);
        return;
    }
    const ex = CART.find(x=>x.id===id);
    if(ex) ex.qty+=1;
    else CART.push({id:p.id,name:p.name,price:p.price,img:p.img,qty:1});

    showToast('تمت إضافة المنتج إلى السلة');
    updateMiniCart();
    $('#cartBtn').classList.add('animate-cart-jiggle');
    setTimeout(()=>$('#cartBtn').classList.remove('animate-cart-jiggle'), 550);
    $('#cartCount').textContent = CART.reduce((n,i)=>n+i.qty,0);
};

// Attaches listeners to dynamically created cards
function attachCardListeners(){
    $$('[data-add]').forEach(btn=>{
        // Clear old listeners by cloning
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.addEventListener('click', e=>{
            addToCartById(e.currentTarget.getAttribute('data-add'));
        });
    });
    $$('[data-qv]').forEach(btn=>{
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.addEventListener('click', e=>{
            openQuickViewById(e.currentTarget.getAttribute('data-qv'))
        });
    });
    $$('[data-cat-filter]').forEach(btn =>{ 
        btn.addEventListener('click', e=>{
            const cat = e.currentTarget.getAttribute('data-cat');
            currentCat = cat;
            $$('.product-filter-btn').forEach(b => b.classList.remove('active-filter'));
            $(`.product-filter-btn[data-cat="${cat}"]`).classList.add('active-filter');
            applyFiltersAndSort();
            const targetElement = $('#all-products');
            if(targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
};

// Opens the Quick View modal with product data
function openQuickViewById(id){
    const p=PRODUCTS.find(x=>x.id===id);
    if(!p) return;
    const modal=$('#quickViewModal');

    $('#modal-main-image').src = p.img;
    $('#modal-title').innerText = p.name;
    $('#modal-rating').innerHTML = star(p.rating||4);
    $('#modal-price').innerHTML = `${SAR(p.price)} ${p.old? `<span class='text-gray-400 text-base line-through mr-2'>${SAR(p.old)}</span>`:''}`;

    $('#tab-description').innerText = p.desc||'لا يوجد وصف متوفر.';
    $('#tab-specs').innerText = p.specs||'لا توجد مواصفات متوفرة.';
    $('#tab-shipping').innerText = p.shipping||'تطبق سياسات الشحن القياسية.';

    // Media Tabs
    const videoTab = $('#modal-video-tab');
    if (p.video) {
        videoTab.style.display = 'block';
        $('#modal-video-iframe').src = p.video;
    } else {
        videoTab.style.display = 'none';
        $('#modal-video-iframe').src = '';
    }

    const userPhotosGrid = $('#modal-user-photos-grid');
    if (p.userImages && p.userImages.length > 0) {
        userPhotosGrid.innerHTML = p.userImages.map(img => `<img src="${img}" class="w-full h-20 object-cover rounded-md" alt="User photo">`).join('');
    } else {
        userPhotosGrid.innerHTML = `<p class="text-sm text-gray-500 col-span-4">لا توجد صور.</p>`;
    }

    const thumbnailGrid = $('#modal-thumbnail-grid');
    thumbnailGrid.innerHTML = `<img src="${p.img}" class="w-full h-20 object-cover rounded-md border-2 border-[var(--primary-dark)]" alt="Thumbnail">`;
    // Add more thumbnails if they exist in data

    // Upsell
    const up = PRODUCTS.find(x=> x.cat===p.cat && x.id!==p.id);
    $('#modal-upsell-item').innerHTML = up? `<img src='${up.img}' class='w-12 h-12 rounded-lg object-cover' alt='${up.name}'/><div class='text-sm flex-1'><div class='font-bold'>قد يعجبك أيضًا: ${up.name}</div><div class='text-[var(--primary-dark)] dark:text-white font-extrabold'>${SAR(up.price)}</div></div> <button class="salla-add-to-cart text-white w-9 h-9 rounded-full bg-primary-dark hover:bg-accent-coral" data-add="${up.id}" aria-label="Add ${up.name} to cart"><i class="fas fa-plus"></i></button>`: '<p class="text-sm text-gray-500">لا توجد منتجات مقترحة.</p>';

    $('#modal-add-to-cart').setAttribute('data-product-id', p.id);

    // Reset tabs
    $$('.modal-tab-btn[data-tab-group="media"]').forEach(b=>b.classList.remove('active'));
    $$('.modal-tab-btn[data-tab-target="#modal-image-panel"]').forEach(b=>b.classList.add('active'));
    $$('.modal-tab-panel[id^="modal-"]').forEach(p=>p.classList.remove('active'));
    $('#modal-image-panel').classList.add('active');

    $$('.modal-tab-btn[data-tab-group="info"]').forEach(b=>b.classList.remove('active'));
    $$('.modal-tab-btn[data-tab-target="#tab-description"]').forEach(b=>b.classList.add('active'));
    $$('.modal-tab-panel[id^="tab-"]').forEach(p=>p.classList.remove('active'));
    $('#tab-description').classList.add('active');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

// Closes the Quick View modal
function closeQuickView(){
    const modal = $('#quickViewModal');
    modal.classList.remove('active');
    $('#modal-video-iframe').src = ''; // Stop video
    document.body.style.overflow = ''; // Restore scrolling
};

// Modal Tab logic
$$(".modal-tab-btn").forEach(btn=> btn.addEventListener('click', e=>{
    const group = e.currentTarget.getAttribute('data-tab-group');
    $$(`.modal-tab-btn[data-tab-group="${group}"]`).forEach(b=>b.classList.remove('active'));
    e.currentTarget.classList.add('active');
    $$(`.modal-tab-panel[id^="${group==='media'?'modal-':'tab-'}"]`).forEach(p=>p.classList.remove('active'));
    const t=e.currentTarget.getAttribute('data-tab-target');
    $(t).classList.add('active');
}));

// Shows a toast notification
function showToast(msg, isError = false){
    const t=$('#toast');
    t.textContent=msg;
    t.style.backgroundColor = isError ? 'var(--danger)' : '#333';
    if(document.body.classList.contains('dark') && !isError) t.style.backgroundColor = '#fff';

    t.style.opacity='1';
    t.style.transform='translateY(0)';
    setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateY(8px)'; }, 2000);
};

// ===== Enhanced Mobile Navigation =====
function enhanceMobileNav(){
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () =>{
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0)';
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll down - hide header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up - show header
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

};

// ===== Enhanced Filter System =====
function enhanceFilters(){
    const filterButtons = document.querySelectorAll('.product-filter-btn');
    const priceInputs = document.querySelectorAll('#priceMin, #priceMax');

    filterButtons.forEach(btn =>{
        btn.addEventListener('click', function(){
            // Add micro-interaction
            this.style.transform = 'scale(0.95)';
            setTimeout(() =>{
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Price range visual feedback
    priceInputs.forEach(input =>{
        input.addEventListener('input', function(){
            this.parentElement.style.borderColor =
                this.value ? 'var(--accent-coral)' : '';
        });
    });

    // Real-time search with debounce
    let searchTimeout;
    document.getElementById('searchInput').addEventListener('input', function(e){
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() =>{
            applyFiltersAndSort();
        }, 300);
    });

};

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', function(){
    // Initialize AOS
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

    // --- INITIAL RENDER ---
    renderOffers();
    renderFeatured();
    renderAll();

    // --- ENHANCED FEATURES ---
    enhanceMobileNav();
    enhanceFilters();

    // --- INTERACTIVITY ---
    setupInteractions();
    startCountdown();
    $('#footer-year').textContent = new Date().getFullYear();

    // Enhanced lazy loading
    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver(function(entries, observer){
            entries.forEach(function(entry){
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(function(lazyImage){
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Setup interactions
function setupInteractions(){
    // Theme & Direction toggles
    $('#dirToggle')?.addEventListener('click', () =>{
        const html = document.documentElement;
        html.dir = html.dir === 'rtl' ? 'ltr' : 'rtl';
    });
    $('#themeToggle')?.addEventListener('click', () =>{
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';

        if (isDark) {
            html.removeAttribute('data-theme');
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
            $('#themeToggle i').classList.remove('fa-sun');
            $('#themeToggle i').classList.add('fa-moon');
        } else {
            html.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
            $('#themeToggle i').classList.remove('fa-moon');
            $('#themeToggle i').classList.add('fa-sun');
        }
    });

    // Check initial dark mode
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.add('dark');
        $('#themeToggle i').classList.remove('fa-moon');
        $('#themeToggle i').classList.add('fa-sun');
    }

    // Sidebar
    const sidebarToggle = $('#sidebarToggle');
    const sidebarClose = $('#sidebarClose');
    const sidebarOverlay = $('#sidebarOverlay');
    const sidebar = $('#sidebar');

    const toggleSidebar = () =>{
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    };
    const closeSidebar = () =>{
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if(sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
    if(sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if(sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);
    $$('.sidebar-link').forEach(link => link.addEventListener('click', closeSidebar));

    // Mini Cart
    $('#cartBtn')?.addEventListener('click', openMiniCart);
    $('#mini-cart-close')?.addEventListener('click', closeMiniCart);
    $('#mini-cart-overlay')?.addEventListener('click', closeMiniCart);
    $('#mini-cart-continue')?.addEventListener('click', closeMiniCart);

    // Filters & Sort
    $$('.product-filter-btn').forEach(button =>{
        button.addEventListener('click', function(){
            $$('.product-filter-btn').forEach(btn => btn.classList.remove('active-filter'));
            this.classList.add('active-filter');
            currentCat = this.getAttribute('data-cat');
            applyFiltersAndSort();
        });
    });
    $('#sortSelect').addEventListener('change', applyFiltersAndSort);

    // Quick view add-to-cart
    $('#modal-add-to-cart')?.addEventListener('click', (e)=>{
        const id=e.currentTarget.getAttribute('data-product-id');
        if(id){
            addToCartById(id);
            closeQuickView();
        }
    });

    // Init Swipers
    initSwipers();
};

// Mini Cart functions
function openMiniCart(){
    $('#mini-cart').classList.add('active');
    $('#mini-cart-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    updateMiniCart();
};

function closeMiniCart(){
    $('#mini-cart').classList.remove('active');
    $('#mini-cart-overlay').classList.remove('active');
    document.body.style.overflow = '';
};

// Swiper initialization
function initSwipers(){
    // Offers Swiper
    new Swiper('.offers-swiper', {
        slidesPerView: 1.2,
        spaceBetween: 12,
        breakpoints: {
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 }
        },
        pagination: {
            el: '.offers-swiper .swiper-pagination',
            clickable: true
        }
    });
};

// Countdown timer
function startCountdown(){
    const end=new Date();
    end.setHours(23,59,59,999);
    const ids=['d','h','m','s'];
    const int=setInterval(()=>{
        const now=new Date();
        const t=end-now;
        if(t<=0){
            clearInterval(int);
            ids.forEach(id=>$('#'+id).textContent='00');
            return;
        }
        const d=Math.floor(t/86400000),
            h=Math.floor((t%86400000)/3600000),
            m=Math.floor((t%3600000)/60000),
            s=Math.floor((t%60000)/1000);
        $('#d').textContent=String(d).padStart(2,'0');
        $('#h').textContent=String(h).padStart(2,'0');
        $('#m').textContent=String(m).padStart(2,'0');
        $('#s').textContent=String(s).padStart(2,'0');
    },1000);
};
